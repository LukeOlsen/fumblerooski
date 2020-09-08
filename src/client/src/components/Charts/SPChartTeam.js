import React, { Component } from "react";
import {
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
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
        <RadarChart data={this.props.spRank}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="offense"
            dataKey="dataSet"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SPChartTeam);
