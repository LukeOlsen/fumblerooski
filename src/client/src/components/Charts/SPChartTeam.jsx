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
import equal from "fast-deep-equal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const mapStateToProps = (state) => {
  return {
    spRank: state.teamReducer.spRank,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTeamSPRanking: (team, year, side) =>
      dispatch(getTeamSPRanking(team, year, side)),
  };
};

class SPChartTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      side: "offense",
    };

    this.handleSideChange = this.handleSideChange.bind(this);
  }

  componentDidMount() {
    this.props.getTeamSPRanking(
      this.props.team,
      this.props.year,
      this.state.side
    );
  }

  componentDidUpdate(prevProps) {
    if (
      !equal(this.props.team, prevProps.team) ||
      !equal(this.props.year, prevProps.year)
    ) {
      this.props.getTeamSPRanking(
        this.props.team,
        this.props.year,
        this.state.side
      );
    }
  }

  handleSideChange(e) {
    this.setState({ side: e.target.value });
    this.props.getTeamSPRanking(
      this.props.team,
      this.props.year,
      e.target.value
    );
  }

  render() {
    return (
      <div className="h-full p-4">
        <div className="h-2 flex">
          <div className="flex text-center">
            <form className="self-center" onSubmit={this.handleYearSubmit}>
              <div className="inline-block relative w-32 rounded text-indigo-400">
                <select
                  className="block leading-tight w-32 appearance-none py-1 px-2 rounded cursor-pointer hover:bg-gray-600 bg-gray-900"
                  value={this.state.side}
                  onChange={this.handleSideChange}
                >
                  <option value="offense">Offense</option>
                  <option value="defense">Defense</option>
                </select>
                {/* <div className="pointer-events-none absolute inset-y-0 right-0 left-2 flex items-center">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div> */}
              </div>
            </form>
          </div>
        </div>
        <ResponsiveContainer>
          <RadarChart data={this.props.spRank}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 130]} />
            <Radar
              name="offense"
              dataKey="dataSet"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.8}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SPChartTeam);
