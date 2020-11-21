import React, { Component } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import {
  getConferenceSPRanking,
  getTeamSPRanking,
} from "../../actions/Teams/TeamsAPI";
import { connect } from "react-redux";
import equal from "fast-deep-equal";

const mapStateToProps = (state) => {
  return {
    spRank: state.teamReducer.spRank,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTeamSPRanking: (team, year, side) =>
      dispatch(getTeamSPRanking(team, year, side)),
    getConferenceSPRanking: (conference, year, side) =>
      dispatch(getConferenceSPRanking(conference, year, side)),
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
      <div className="h-full p-2">
        <div className="h-8 flex mb-4">
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
              </div>
            </form>
          </div>
        </div>
        <div className="h-64">
          {this.props?.spRank?.length > 0 && (
            <ResponsiveContainer>
              <BarChart data={this.props.spRank}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  tick={{ fontSize: 10 }}
                  interval={0}
                  stroke="#efefef"
                  dataKey="subject"
                />
                <YAxis stroke="#efefef" domain={[70, 130]} />
                <Tooltip />
                <Legend />
                <Bar name="offense" dataKey="dataSet" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          )}
          {!this.props.spRank?.length && <div>No Data Available</div>}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SPChartTeam);
