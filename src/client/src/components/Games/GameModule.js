import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

class GameModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div
        onClick={() => this.setState({ open: !this.state.open })}
        className="w-full h-10 bg-gray-700 text-indigo-400 rounded my-2 flex items-center"
      >
        <div className="mx-2">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div className="mx-2">Season: {this.props.season}</div>
        <div className="mx-2">Week: {this.props.week}</div>
        <div className="mx-2">{this.props.home_team}</div>
        <div className="mx-2">{this.props.home_points}</div>
        <div className="mx-2"> - </div>
        <div className="mx-2">{this.props.away_points}</div>
        <div className="mx-2">{this.props.away_team}</div>
        {this.state.open ? <div>show</div> : <div>don't show</div>}
      </div>
    );
  }
}

export default GameModule;
