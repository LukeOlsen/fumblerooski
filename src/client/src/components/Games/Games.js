import React, { Component } from "react";
import qs from "qs";
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

const SelectBlock = (props) => {
  return (
    <div className="inline-block relative w-64 rounded">
      <select
        className="block leading-tight text-black m-10 w-30 appearance-none bg-gray-700 text-indigo-400 py-1 px-2 pr-12 rounded cursor-pointer hover:bg-gray-600"
        value={props.teamValue}
        onChange={props.changeFunction}
      >
        <option selected>Select</option>
        {props.teamsList.map((team) => {
          return <option key={team.school}>{team.school}</option>;
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-400">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
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

  componentDidMount() {
    if (this.props.history.location.search) {
      let qValues = qs.parse(this.props.history.location.search, {
        ignoreQueryPrefix: true,
      });
      if (qValues.home) {
        this.setState({ firstTeam: qValues.home });
      }

      if (qValues.away) {
        this.setState({ secondTeam: qValues.away });
      }

      this.props.getMatchupHistory(qValues.home, qValues.away);
    }
  }

  componentDidUpdate() {
    // console.log(this.props);
  }

  handleFirstTeamChange(event) {
    this.setState({ firstTeam: event.target.value });
    if (this.props.history.location.search) {
      let obj = qs.parse(this.props.history.location.search, {
        ignoreQueryPrefix: true,
      });
      if (obj.away) {
        this.props.history.push({
          pathname: "/games",
          search: `?home=${event.target.value}&away=${obj.away}`,
        });
      }
    } else {
      this.props.history.push({
        pathname: "/games",
        search: `?home=${event.target.value}`,
      });
    }
  }

  handleSecondTeamChange(event) {
    this.setState({ secondTeam: event.target.value });
    if (this.props.history.location.search) {
      let obj = qs.parse(this.props.history.location.search, {
        ignoreQueryPrefix: true,
      });
      if (obj.home) {
        this.props.history.push({
          pathname: "/games",
          search: `?home=${obj.home}&away=${event.target.value}`,
        });
      }
    } else {
      this.props.history.push({
        pathname: "/games",
        search: `?away=${event.target.value}`,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.firstTeam !== "Select" &&
      this.state.secondTeam !== "Select"
    ) {
      this.props.getMatchupHistory(this.state.firstTeam, this.state.secondTeam);
    } else {
      alert("Please choose two teams");
    }
  }

  render() {
    return (
      <div className="p-2 flex-grow max-h-full overflow-y-scroll flex-row h-screen">
        <div>
          <h1>Welcome to the match ups</h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <SelectBlock
              teamValue={this.state.firstTeam}
              changeFunction={this.handleFirstTeamChange}
              teamsList={this.props.teamsList}
            />
            <SelectBlock
              teamValue={this.state.secondTeam}
              changeFunction={this.handleSecondTeamChange}
              teamsList={this.props.teamsList}
            />
            <input
              className="mx-10 px-2 py-1 rounded cursor-pointer hover:bg-gray-600 bg-gray-700 text-indigo-400"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div className="flex flex-wrap justify-around">
          {this.props.gameHistory.length > 1
            ? this.props.gameHistory.map((game) => {
                return <GameModule key={game.id} {...game} />;
              })
            : null}
          {this.props.matchupHistory.length > 1 &&
          this.props.matchupHistory[0] != 0 ? (
            this.props.matchupHistory.map((game) => {
              return <GameModule key={game.id} {...game} />;
            })
          ) : (
            <div>It doesn't look like these teams have met since 2000</div>
          )}
        </div>
        {this.props.popOpen ? <GamePopUp /> : null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
