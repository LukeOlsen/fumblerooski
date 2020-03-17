import React, { Component } from "react";
import { connect } from "react-redux";
import { getTeamData } from "../../actions/Teams/TeamsAPI";
import RecruitsTable from "../Recruits/RecruitsTable";

const mapStateToProps = state => {
  console.log(state);
  return {
    team: state.teamReducer.team,
    data: state.teamReducer.data,
    teamInfo: state.teamReducer.teamInfo,
    recruits: state.teamReducer.latestRecruits,
    talent: state.teamReducer.latestTalentRating
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // setTeam: team => dispatch(setTeam(team)),
    getTeamData: team => dispatch(getTeamData(team))
  };
};

const RenderLogo = props => {
  console.log(props);
  if (props) {
    return (
      <div className="w-full md:flex-1 self-center">
        <img className="h-40 object-center" src={props.logos_1} alt="" />
      </div>
    );
  } else {
    return <span></span>;
  }
};

class Team extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTeamData(this.props.match.params.teamName);
  }

  render() {
    console.log(this.props);
    if (this.props.team) {
      const styles = {
        // background: this.props.team.alt_color
      };
    }
    return (
      <div className="p-2 pl-10 flex-grow max-h-full overflow-y-scroll flex-row">
        <div className="flex">
          <div className="flex-auto">
            <p className="text-4xl">
              {this.props.match.params.teamName}{" "}
              {this.props.teamInfo[0] ? this.props.teamInfo[0].mascot : ""}
            </p>
          </div>
          <div className="flex-auto flex text-center">
            <div className="flex-1 text-2xl self-center">
              <p>2019</p>
            </div>
            <div className="flex-1 text-2xl self-center">
              {this.props.teamInfo[0] ? this.props.teamInfo[0].conference : ""}
            </div>
            <div className="flex-1 text-2xl self-center">
              {this.props.teamInfo[0] ? this.props.teamInfo[0].division : ""}
            </div>
            <div className="flex-1 text-2xl self-center">
              {this.props.talent[0] ? this.props.talent[0].talent : ""}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {/* {this.props.teamInfo[0] ? (
            <RenderLogo {...this.props.teamInfo[0]} />
          ) : (
            ""
          )} */}
        </div>
        <div className="flex flex-wrap">
          <div className="bg-gray-700 rounded border-black h-64 w-full sm:flex-1 md:flex-1/3 m-2 shadow-lg"></div>
          <div className="bg-gray-700 rounded border-black h-64 w-full sm:flex-1 md:flex-1/3 m-2 shadow-lg"></div>
        </div>
        <div className="bg-gray-700 rounded m-2">
          <RecruitsTable recruits={[this.props.recruits]} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);
