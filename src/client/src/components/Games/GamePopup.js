import React, { Component } from "react";
import { connect } from "react-redux";
import { closeGamePopup } from "../../actions/Games/GamesIndex";

const mapDispatchToProps = (dispatch) => {
  return {
    closePop: () => dispatch(closeGamePopup),
  };
};

const mapStateToProps = (state) => {
  return {
    drives: state.gamesReducer.gameDrives,
  };
};

class GamePopUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        onClick={() => this.props.closePop()}
        className="z-10 bg-gray-900 bg-opacity-50 w-full h-full flex justify-center fixed top-0 mt-8"
      >
        <div className="bg-gray-600 w-7/12">
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
          {this.props.drives.map((drive) => {
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
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePopUp);
