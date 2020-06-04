import React, { Component } from "react";
import { connect } from "react-redux";
import { getTeamData } from "../../actions/Teams/TeamsAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import RecruitsTable from "../Recruits/RecruitsTable";
import PPALine from "../Charts/PPALineChart";
import BCRPieChart from "../Charts/BCRPieChart";
import Loading from "../Loading";
import SimpleMatchup from "./TeamYearMatchups";
import { loading, doneLoading } from "../../actions/index";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    team: state.teamReducer.team,
    data: state.teamReducer.data,
    teamInfo: state.teamReducer.teamInfo,
    recruits: state.teamReducer.latestRecruits,
    talent: state.teamReducer.latestTalentRating,
    PPA: state.teamReducer.ppaAverages,
    BCR: state.teamReducer.BCR,
    yearRecord: state.teamReducer.yearRecord,
    isLoading: state.generalReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTeamData: (team, year) => dispatch(getTeamData(team, year)),
    loading: () => dispatch(loading()),
    doneLoading: () => dispatch(doneLoading()),
  };
};

let currentTeam = "";

const RenderLogo = (props) => {
  if (props) {
    return (
      <div className="w-full md:flex-1 self-center">
        <img className="h-40 object-center" src={props.logos_1} alt="" />
      </div>
    );
  } else {
    return null;
  }
};

export class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: 2019,
    };

    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleYearSubmit = this.handleYearSubmit.bind(this);
  }

  handleYearChange(event) {
    this.setState({ year: event.target.value });
    this.props.getTeamData(
      this.props.match.params.teamName,
      event.target.value
    );
  }

  handleYearSubmit() {
    this.props.getTeamData(this.props.match.params.teamName, this.state.year);
  }

  componentDidMount() {
    this.props.getTeamData(this.props.match.params.teamName, this.state.year);
    currentTeam = this.props.match.params.teamName;
  }

  componentDidUpdate() {
    if (this.props.match.params.teamName != currentTeam) {
      this.props.loading();
      this.props.getTeamData(this.props.match.params.teamName, this.state.year);
      currentTeam = this.props.match.params.teamName;
    }
  }

  render() {
    return (
      <div className="p-2 pl-10 flex-grow max-h-full overflow-y-scroll flex-row min-h-screen">
        <div className="flex">
          <div className="flex-auto">
            <p className="text-4xl">
              {this.props.match.params.teamName}{" "}
              {!this.props.isLoading ? this.props.teamInfo[0].mascot : ""}
            </p>
          </div>
          <div className="flex-auto flex text-center">
            <form
              className="flex-1 self-center"
              onSubmit={this.handleYearSubmit}
            >
              <div className="inline-block relative w-20 rounded">
                <select
                  className="block leading-tight text-black mr-10 w-30 appearance-none py-1 px-2 pr-12 rounded"
                  value={this.state.teamYear}
                  onChange={this.handleYearChange}
                >
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                  <option>2009</option>
                  <option>2008</option>
                  <option>2007</option>
                  <option>2006</option>
                  <option>2005</option>
                  <option>2004</option>
                  <option>2003</option>
                  <option>2002</option>
                  <option>2001</option>
                  <option>2000</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 left-2 flex items-center text-gray-700">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
            </form>
            <div className="flex-1 text-2xl self-center">
              {!this.props.isLoading ? this.props.teamInfo[0].conference : ""}
            </div>
            <div className="flex-1 text-2xl self-center">
              {!this.props.isLoading ? this.props.teamInfo[0].division : ""}
            </div>
            <div className="flex-1 text-2xl self-center">
              {!this.props.isLoading
                ? this.props.teamInfo[0].teamRecord[0].total_wins +
                  "-" +
                  this.props.teamInfo[0].teamRecord[0].total_losses
                : ""}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row">
          <div className="bg-gray-700 rounded border-black h-64 w-full sm:flex-1 md:flex-1/3 m-2 shadow-lg">
            {!this.props.isLoading ? <PPALine PPA={this.props.PPA} /> : null}
          </div>
        </div>
        <div className="flex">
          <div className="bg-gray-700 rounded m-2 h-64 sm:flex-1 md:flex-1/3">
            {!this.props.isLoading ? (
              <SimpleMatchup props={this.props.yearRecord} />
            ) : null}
          </div>
          <div className="bg-gray-700 rounded m-2 h-64 sm:flex-1 md:flex-1/3">
            {!this.props.isLoading ? (
              <BCRPieChart data={this.props.BCR} />
            ) : null}
          </div>
        </div>
        <div className="bg-gray-700 rounded m-2">
          {this.props.isLoading ? (
            ""
          ) : (
            <RecruitsTable recruits={[this.props.recruits]} />
          )}
        </div>
        {this.props.isLoading ? <Loading /> : null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);
