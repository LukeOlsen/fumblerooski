import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { getAdvancedBoxedScores } from "../../actions/Games/GamesAPI";

const mapDispatchToProps = dispatch => {
  return {
    getAdvancedBoxedScores: gameId => dispatch(getAdvancedBoxedScores(gameId))
  };
};

const mapStateToProps = state => {
  return {
    teamsList: state.teamReducer.teamsList
  };
};

const RenderDrives = props => {
  console.log(props.drives);
  if (props.drives) {
    return (
      <div>
        <div className="flex justify-around">
          <div className="mx-5 w-32">
            <p className="text-sm">Offense</p>
          </div>
          <div className="mx-5 w-32">
            <p className="text-sm">Result</p>
          </div>
          <div className="mx-5 w-32">
            <p className="text-sm">Starting Yard Line</p>
          </div>
          <div className="mx-5 w-32">
            <p className="text-sm">End Yard Line</p>
          </div>
          <div className="mx-5 w-32">
            <p className="text-sm">Number of Plays</p>
          </div>
          <div className="mx-5 w-32">
            <p className="text-sm">Time Elapsed</p>
          </div>
        </div>
        {props.drives.map(drive => {
          return (
            <div className="flex justify-around">
              <div className="mx-5 w-32">
                <div>{drive.offense}</div>
              </div>
              <div className="mx-5 w-32">
                <div>{drive.drive_result}</div>
              </div>
              <div className="mx-5 w-32">
                <div>{drive.start_yardline}</div>
              </div>
              <div className="mx-5 w-32">
                <div>{drive.end_yardline}</div>
              </div>
              <div className="mx-5 w-32">
                <div>{drive.plays}</div>
              </div>
              <div className="mx-5 w-32">
                <div>
                  {drive.elapsed_minutes}:{drive.elapsed_seconds}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

class GameModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      gameAbs: null,
      gameStats: null,
      gameDrives: null
    };
    console.log(props);

    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    this.setState({ open: !this.state.open });
    if (!this.state.gameDrives) {
      axios.get(`/api/games/ABS/${this.props.id}`).then(res => {
        this.setState({
          gameAbs: res.data[0],
          gameStats: res.data[1],
          gameDrives: res.data[2]
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
        className="w-full bg-gray-700 text-indigo-400 rounded my-2"
      >
        <div className="flex items-center">
          <div className="mx-2">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className="mx-2">
            <div>Season: {this.props.season}</div>
          </div>
          <div className="mx-2">
            <div>Week: {this.props.week}</div>
          </div>
          <div className="">
            <img className="h-10" src={this.props.homeTeam.logos_1} />
          </div>
          <div className="mx-2">
            <div>{this.props.home_team}</div>
          </div>
          <div className="mx-2">
            <div>{this.props.home_points}</div>
          </div>
          <div className="mx-2">
            <div> - </div>
          </div>
          <div className="mx-2">
            <div>{this.props.away_points}</div>
          </div>
          <div className="">
            <img className="h-10" src={this.props.awayTeam.logos_1} />
          </div>
          <div className="mx-2">
            <div>{this.props.away_team}</div>
          </div>
        </div>
        {this.state.open ? (
          <RenderDrives drives={this.state.gameDrives} />
        ) : null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameModule);
