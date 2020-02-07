import React, { Component } from "react";
import { connect } from "react-redux";
import { getTeamData } from "../../actions/Teams/TeamsAPI";

const mapStateToProps = state => {
  return {
    team: state.teamReducer.team,
    data: state.teamReducer.data,
    teamData: state.teamReducer.teamData
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
    return <img class="h-40" src={props.logos_1} alt="" />;
  } else {
    return <span></span>;
  }
};

class Team extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  componentDidMount() {
    this.props.getTeamData(this.props.team);
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    if (this.props.team) {
      const styles = {
        // background: this.props.team.alt_color
      };
    }
    return (
      <div className="flex-row">
        <h2 className="text-6xl mt-8">{this.props.match.params.teamName}</h2>
        {this.props.teamData ? <RenderLogo {...this.props.teamData} /> : ""}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);
