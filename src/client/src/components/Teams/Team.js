import React, { Component } from "react";
import { connect } from "react-redux";
import { getTeamData } from "../../actions/Teams/TeamsAPI";

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
      <div className="App-body p-2 flex-grow text-center max-h-full overflow-y-scroll flex-row">
        <h2 className="text-6xl mt-8">
          {this.props.match.params.teamName}{" "}
          {this.props.teamInfo[0] ? this.props.teamInfo[0].mascot : ""}
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {this.props.teamInfo[0] ? (
            <RenderLogo {...this.props.teamInfo[0]} />
          ) : (
            ""
          )}
          <div className="w-full md:flex-1 text-4xl self-center">
            {this.props.teamInfo[0] ? this.props.teamInfo[0].conference : ""}
          </div>
          <div className="w-full md:flex-1 text-4xl self-center">
            {this.props.teamInfo[0] ? this.props.teamInfo[0].division : ""}
          </div>
          <div className="w-full md:flex-1 text-4xl self-center">
            {this.props.talent[0] ? this.props.talent[0].talent : ""}
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="bg-gray-100 rounded border-black h-64 w-full md:flex-1 m-2 shadow-lg"></div>
          <div className="bg-gray-100 rounded border-black h-64 w-full md:flex-1 m-2 shadow-lg"></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);
