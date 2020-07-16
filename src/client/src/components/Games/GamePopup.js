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

const FormatTime = (props) => {
  let minFormat;
  let secFormat;
  if (!props.min) {
    minFormat = "0";
  } else {
    minFormat = props.min;
  }

  if (!props.sec) {
    secFormat = "00";
  } else if (props.sec.toString().length === 1) {
    secFormat = "0" + props.sec;
  } else {
    secFormat = props.sec;
  }

  return <span>{minFormat + ":" + secFormat}</span>;
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
          <table className="table-auto border-collapse border-2 border-gray-500 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-400 px-2 py-1">Offense</th>
                <th className="border border-gray-400 px-2 py-1">Result</th>
                <th className="border border-gray-400 px-2 py-1">
                  Starting Yard Line
                </th>
                <th className="border border-gray-400 px-2 py-1">
                  End Yard Line
                </th>
                <th className="border border-gray-400 px-2 py-1">
                  Number of Plays
                </th>
                <th className="border border-gray-400 px-2 py-1">
                  Time Elapsed
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.drives.map((drive) => {
                return (
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">
                      {drive.offense}
                    </td>
                    <td className="border border-gray-400 px-2 py-1">
                      {drive.drive_result}
                    </td>
                    <td className="border border-gray-400 px-2 py-1">
                      {drive.start_yardline}
                    </td>
                    <td className="border border-gray-400 px-2 py-1">
                      {drive.end_yardline}
                    </td>
                    <td className="border border-gray-400 px-2 py-1">
                      {drive.plays}
                    </td>
                    <td className="border border-gray-400 px-2 py-1">
                      <FormatTime
                        min={drive.elapsed_minutes}
                        sec={drive.elapsed_seconds}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePopUp);
