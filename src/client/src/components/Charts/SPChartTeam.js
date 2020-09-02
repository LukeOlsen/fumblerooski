import React, { Component } from "react";
import { RadarChart, ResponsiveContainer } from "recharts";
import { getTeamSPRanking } from "../../actions/Teams/TeamsAPI";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    spRank: state.teamReducer.spRank,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTeamSPRanking: (team, year) => dispatch(getTeamSPRanking(team, year)),
  };
};

class SPChartTeam extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTeamSPRanking(this.props.team, this.props.year);
  }

  render() {
    return (
      <ResponsiveContainer>
        <RadarChart></RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SPChartTeam);
