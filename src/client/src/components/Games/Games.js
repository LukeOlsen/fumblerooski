import React, { Component } from "react";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {
    teamsList: state.teamReducer.teamsList
  };
};

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstTeam: "",
      secondTeam: ""
    };

    this.handleFirstTeamChange = this.handleFirstTeamChange.bind(this);
    this.handleSecondTeamChange = this.handleSecondTeamChange.bind(this);
  }

  handleFirstTeamChange(event) {
    this.setState({ firstTeam: event.target.value });
  }

  handleSecondTeamChange(event) {
    this.setState({ secondTeam: event.target.value });
  }

  render() {
    return (
      <div className="p-2 pl-10 flex-grow max-h-full overflow-y-scroll flex-row">
        <div>
          <h1>Welcome to the match ups</h1>
        </div>
        <div>
          <form>
            <select
              className="text-black m-10 w-30"
              value={this.state.firstTeam}
              onChange={this.handleFirstTeamChange}
            >
              <option selected>select</option>
              {this.props.teamsList.map(team => {
                return <option key={team.school}>{team.school}</option>;
              })}
            </select>
            <select
              className="text-black m-10 w-30"
              value={this.state.secondTeam}
              onChange={this.handleSecondTeamChange}
            >
              <option selected>select</option>
              {this.props.teamsList.map((team, id) => {
                return (
                  <option key={team.school + team.id}>{team.school}</option>
                );
              })}
            </select>
          </form>
        </div>
        <div>{this.state.firstTeam}</div>
        <div>{this.state.secondTeam}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
