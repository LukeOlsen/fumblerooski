import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getAdvancedBoxedScores } from "../../actions/Games/GamesAPI";

const mapDispatchToProps = (dispatch) => {
  return {
    getAdvancedBoxedScores: (gameId) =>
      dispatch(getAdvancedBoxedScores(gameId)),
  };
};

const mapStateToProps = (state) => {
  return {
    teamsList: state.teamReducer.teamsList,
  };
};

class GameModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      gameAbs: null,
      gameStats: null,
      gameDrives: null,
    };
    console.log(props);

    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    this.setState({ open: !this.state.open });
    if (!this.state.gameDrives) {
      axios.get(`/api/games/ABS/${this.props.id}`).then((res) => {
        this.setState({
          gameAbs: res.data[0],
          gameStats: res.data[1],
          gameDrives: res.data[2],
        });
      });
    }
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div
        onClick={() => this.handleExpand()}
        className="bg-gray-700 text-indigo-400 items-center h-40 rounded-md m-2 mx-4 w-1/4 flex items-center justify-center flex-wrap cursor-pointer border border-gray-700 hover:bg-gray-600 hover:border-white hover:border-gray-500 hover:border-solid"
      >
        <div className="flex items-center w-full justify-around">
          <div className="text-2xl">
            <div>{this.props.season}</div>
          </div>
          <div className="mx-2">
            <div>Week: {this.props.week}</div>
          </div>
        </div>
        <div className="flex items-center justify-around w-full">
          <div className="mx-2">
            <img
              className="h-10 w-10 max-w-xs"
              src={this.props.homeTeam.logos_1}
            />
          </div>
          <div className="mx-2">
            <div>{this.props.home_team}</div>
          </div>
          <div className="mx-2">
            <div>{this.props.home_points}</div>
          </div>
        </div>
        <div className="flex items-center w-full justify-around">
          <div className="mx-2">
            <img className="h-10 max-w-xs" src={this.props.awayTeam.logos_1} />
          </div>
          <div className="mx-2">
            <div>{this.props.away_team}</div>
          </div>
          <div className="mx-2">
            <div>{this.props.away_points}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameModule);
