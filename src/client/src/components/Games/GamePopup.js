import React, { Component } from "react";
import { connect } from "react-redux";
import { closeGamePopup } from "../../actions/Games/GamesIndex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const mapDispatchToProps = (dispatch) => {
  return {
    closePop: () => dispatch(closeGamePopup()),
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
        className="z-20 bg-gray-900 bg-opacity-50 w-full h-screen flex justify-center fixed left-0 top-0 pt-12"
      >
        <div className="bg-gray-600 z-30 max-h-1/2 rounded p-4 transform transition translate-y-1 ease-in duration-500 overflow-auto">
          <div className="flex justify-end align-middle">
            <div className="hover:text-red-500 text-2xl cursor-pointer fixed top-0">
              <FontAwesomeIcon
                onClick={() => this.props.closePop()}
                icon={faTimes}
              />
            </div>
          </div>
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
