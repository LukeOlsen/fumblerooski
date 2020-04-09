import React, { Component } from "react";
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

class GameModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
    console.log(props);

    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    this.setState({ open: !this.state.open });
    this.props.getAdvancedBoxedScores(this.props.id);
  }

  render() {
    return (
      <div
        onClick={() => this.handleExpand()}
        className="w-full h-10 bg-gray-700 text-indigo-400 rounded my-2 flex items-center"
      >
        <div className="mx-2">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div className="mx-2">Season: {this.props.season}</div>
        <div className="mx-2">Week: {this.props.week}</div>
        <img className="h-10" src={this.props.homeTeam.logos_1} />
        <div className="mx-2">{this.props.home_team}</div>
        <div className="mx-2">{this.props.home_points}</div>
        <div className="mx-2"> - </div>
        <div className="mx-2">{this.props.away_points}</div>
        <img className="h-10" src={this.props.awayTeam.logos_1} />
        <div className="mx-2">{this.props.away_team}</div>
        {this.state.open ? <div>show</div> : <div>don't show</div>}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameModule);
