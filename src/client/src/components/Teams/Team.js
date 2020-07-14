import React, { Component } from "react";
import qs from "qs";
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
      selectableYears: [
        2019,
        2018,
        2017,
        2016,
        2015,
        2014,
        2013,
        2012,
        2011,
        2010,
        2009,
        2008,
        2007,
        2006,
        2005,
        2004,
        2003,
        2002,
        2001,
        2000,
      ],
    };

    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleYearSubmit = this.handleYearSubmit.bind(this);
  }

  handleYearChange(event) {
    this.setState({ year: event.target.value });
    this.props.history.push({
      pathname: `/team/${this.props.match.params.teamName}`,
      search: `?year=${event.target.value}`,
    });
    this.props.getTeamData(
      this.props.match.params.teamName,
      event.target.value
    );
  }

  handleYearSubmit() {
    this.props.getTeamData(this.props.match.params.teamName, this.state.year);
  }

  componentDidMount() {
    if (this.props.history.location.search) {
      const qVal = qs.parse(this.props.history.location.search, {
        ignoreQueryPrefix: true,
      });
      this.setState({ year: qVal.year });
      this.props.getTeamData(this.props.match.params.teamName, qVal.year);
    } else {
      this.props.getTeamData(this.props.match.params.teamName, this.state.year);
    }
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
      <div className="p-2 flex-grow max-h-screen overflow-y-scroll flex-row">
        {this.props.isLoading ? (
          <Loading />
        ) : (
          <div>
            <div className="flex pl-2">
              <div className="flex-auto">
                {!this.props.isLoading && this.props.teamInfo[0] ? (
                  <p className="text-4xl">
                    {this.props.match.params.teamName +
                      " " +
                      this.props.teamInfo[0].mascot}
                  </p>
                ) : null}
              </div>
              <div className="flex-auto flex text-center">
                <form
                  className="flex-1 self-center"
                  onSubmit={this.handleYearSubmit}
                >
                  <div className="inline-block relative w-20 rounded text-indigo-400">
                    <select
                      className="block leading-tight mr-10 w-30 appearance-none py-1 px-2 pr-12 rounded cursor-pointer hover:bg-gray-600 bg-gray-700"
                      value={this.state.year}
                      onChange={this.handleYearChange}
                    >
                      {this.state.selectableYears.map((year) => {
                        return <option>{year}</option>;
                      })}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 left-2 flex items-center">
                      <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                  </div>
                </form>
                {!this.props.isLoading && this.props.teamInfo[0] ? (
                  <div className="flex-1 text-2xl self-center">
                    {this.props.teamInfo[0].conference}
                  </div>
                ) : null}
                {!this.props.isLoading && this.props.teamInfo[0] ? (
                  <div className="flex-1 text-2xl self-center">
                    {this.props.teamInfo[0].division}
                  </div>
                ) : null}
                <div className="flex-1 text-2xl self-center">
                  {!this.props.isLoading && this.props.teamInfo[0]
                    ? this.props.teamInfo[0].teamRecord[0].total_wins +
                      "-" +
                      this.props.teamInfo[0].teamRecord[0].total_losses
                    : ""}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap flex-col md:flex-row">
              <div className="bg-gray-700 rounded border-black h-64 w-full sm:flex-1 md:flex-1/3 m-2 shadow-lg">
                {!this.props.isLoading && this.props.PPA ? (
                  <PPALine PPA={this.props.PPA} />
                ) : null}
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-700 rounded m-2 h-64 sm:flex-1 md:flex-1/3">
                {!this.props.isLoading && this.props.yearRecord ? (
                  <SimpleMatchup props={this.props.yearRecord} />
                ) : null}
              </div>
              <div className="bg-gray-700 rounded m-2 h-64 sm:flex-1 md:flex-1/3">
                {!this.props.isLoading && this.props.BCR ? (
                  <BCRPieChart data={this.props.BCR} />
                ) : null}
              </div>
            </div>
            <div className="bg-gray-700 rounded m-2">
              {this.props.isLoading && this.props.recruits ? (
                ""
              ) : (
                <RecruitsTable recruits={[this.props.recruits]} />
              )}
            </div>
            {this.props.isLoading ? <Loading /> : null}
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);
