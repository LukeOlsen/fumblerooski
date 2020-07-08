import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { getAllGames, getMatchupHistory } from "../../actions/Games/GamesAPI";
import { loading } from "../../actions/index";
import GameModule from "./GameModule";
import GamePopUp from "./GamePopup";

const mapDispatchToProps = (dispatch) => {
  return {
    getAllGames: (team) => dispatch(getAllGames(team)),
    getMatchupHistory: (team1, team2) =>
      dispatch(getMatchupHistory(team1, team2)),
    loading: () => dispatch(loading),
  };
};

const mapStateToProps = (state) => {
  return {
    gameHistory: state.gamesReducer.gameHistory,
    matchupHistory: state.gamesReducer.matchupHistory,
    teamsList: state.teamReducer.teamsList,
    isLoading: state.generalReducer.isLoading,
    popOpen: state.gamesReducer.gamePopupOpen,
  };
};

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstTeam: "Select",
      secondTeam: "Select",
    };

    this.handleFirstTeamChange = this.handleFirstTeamChange.bind(this);
    this.handleSecondTeamChange = this.handleSecondTeamChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstTeamChange(event) {
    this.setState({ firstTeam: event.target.value });
  }

  handleSecondTeamChange(event) {
    this.setState({ secondTeam: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.firstTeam !== "Select" &&
      this.state.secondTeam === "Select"
    ) {
      this.props.getAllGames(this.state.firstTeam);
    } else if (
      this.state.firstTeam !== "Select" &&
      this.state.secondTeam !== "Select"
    ) {
      this.props.getMatchupHistory(this.state.firstTeam, this.state.secondTeam);
    }
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="p-2 pl-10 flex-grow max-h-full overflow-y-scroll flex-row h-screen">
        <div>
          <h1>Welcome to the match ups</h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="inline-block relative w-64 rounded">
              <select
                className="block leading-tight text-black m-10 w-30 appearance-none py-1 px-2 pr-12 rounded"
                value={this.state.firstTeam}
                onChange={this.handleFirstTeamChange}
              >
                <option selected>Select</option>
                {this.props.teamsList.map((team) => {
                  return <option key={team.school}>{team.school}</option>;
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <div className="inline-block relative w-64 rounded">
              <select
                className="block leading-tight text-black m-10 w-30 appearance-none py-1 px-2 pr-12 rounded"
                value={this.state.secondTeam}
                onChange={this.handleSecondTeamChange}
              >
                <option selected>Select</option>
                {this.props.teamsList.map((team, id) => {
                  return (
                    <option
                      disabled={
                        this.state.firstTeam === team.school ? true : null
                      }
                      key={team.school + team.id}
                    >
                      {team.school}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <input className="mx-10" type="submit" value="Submit" />
          </form>
        </div>
        <div className="flex flex-wrap justify-around">
          {this.props.gameHistory.length > 1
            ? this.props.gameHistory.map((game) => {
                return <GameModule key={game.id} {...game} />;
              })
            : null}
          {this.props.matchupHistory.length > 1
            ? this.props.matchupHistory.map((game) => {
                return <GameModule key={game.id} {...game} />;
              })
            : null}
        </div>
        {this.props.popOpen ? <GamePopUp /> : null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
