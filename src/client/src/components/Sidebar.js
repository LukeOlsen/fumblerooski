import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {};
};

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      conferenceVisibile: false,
      secVisible: false,
      accVisible: false,
      big10Visible: false,
      big12Visible: false,
      pac12Visible: false
    };
    this.setConferenceVisible = this.setConferenceVisible.bind(this);
  }

  setConferenceVisible(e) {
    console.log("set");
    this.setState({ conferenceVisibile: !this.state.conferenceVisibile });
    console.log(this.state);
  }

  viewTeams(conference) {
    if (conference === "SEC") {
      this.setState({ secVisible: !this.state.secVisible });
    } else if (conference === "ACC") {
      this.setState({ accVisible: !this.state.accVisible });
    } else if (conference === "B10") {
      this.setState({ big10Visible: !this.state.big10Visible });
    } else if (conference === "B12") {
      this.setState({ big12Visible: !this.state.big12Visible });
    } else if (conference === "P12") {
      this.setState({ pac12Visible: !this.state.pac12Visible });
    }
  }

  render() {
    return (
      <div className="h-screen bg-gray-700 w-48 fixed overflow-auto">
        <div className="p-1 pt-6 text-indigo-400 hover:text-indigo-200 text-shadow cursor-pointer ">
          <div>
            <Link className="w-full h-full" to="/">
              Home
            </Link>
          </div>
        </div>
        <div className="p-1 text-indigo-400 hover:text-indigo-200 text-shadow cursor-pointer">
          <div>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="p-1 cursor-pointer">
          <div
            className="text-indigo-400 text-shadow hover:text-indigo-200 flex justify-between"
            onClick={this.setConferenceVisible}
          >
            <div>Conferences</div>
            <div className="mr-2">
              <FontAwesomeIcon
                icon={faAngleDown}
                rotation={`${this.state.conferenceVisibile ? 180 : 0}`}
              />
            </div>
          </div>
          <div
            className={`pl-3 ${
              this.state.conferenceVisibile ? "visible" : "hidden"
            }`}
          >
            <ul>
              <li>
                <div
                  className="p-1 text-indigo-400 text-shadow hover:text-indigo-200 flex"
                  onClick={() => this.viewTeams("SEC")}
                >
                  <div>SEC</div>
                  <div className="ml-4">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      rotation={`${this.state.secVisible ? 180 : 0}`}
                    />
                  </div>
                </div>
                <ul
                  className={`p-1 pl-2 ${
                    this.state.secVisible ? "visible" : "hidden"
                  }`}
                >
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    <Link to="/team/Alabama">Alabama</Link>
                  </li>
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    <Link to="/team/Auburn">Auburn</Link>
                  </li>
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    <Link to="/team/Arkansas">Arkansas</Link>
                  </li>
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    <Link to="/team/Florida">Florida</Link>
                  </li>
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    <Link to="/team/Georgia">Georgia</Link>
                  </li>
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    <Link to="/team/Kentucky">Kentucky</Link>
                  </li>
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    <Link to="/team/LSU">LSU</Link>
                  </li>
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    <Link to="/team/Missouri">Missouri</Link>
                  </li>
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    <Link to="/team/Ole%20Miss">Ole Miss</Link>
                  </li>
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    <Link to="/team/Vanderbilt">Vanderbilt</Link>
                  </li>
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    <Link to="/team/Texas%20A&M">Texas A&M</Link>
                  </li>
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    <Link to="/team/Mississippi%20State"></Link>Mississippi
                    State
                  </li>
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    <Link to="/team/South%20Carolina">South Carolina</Link>
                  </li>
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    <Link to="/team/Tennessee">Tennessee</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className="p-1 text-indigo-400 text-shadow hover:text-indigo-200 flex"
                  onClick={() => this.viewTeams("ACC")}
                >
                  <div>ACC</div>
                  <div className="ml-4">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      rotation={`${this.state.accVisible ? 180 : 0}`}
                    />
                  </div>
                </div>
              </li>
              <ul
                className={`p-1 pl-2 ${
                  this.state.accVisible ? "visible" : "hidden"
                }`}
              >
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Florida%20State">Florida State</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Georgia%20Tech">Georgia Tech</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Louisville">Louisville</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Boston%20College">Boston College</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/NC%20State">NC State</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Duke">Duke</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/North%20Carolina">North Carolina</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Wake%20Forest">Wake Forest</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Syracuse">Syracuse</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Pittsburgh">Pittsburgh</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Clemson">Clemson</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Virginia">Virginia</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Virginia%20Tech">Virginia Tech</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Miami">Miami</Link>
                </li>
              </ul>
              <li>
                <div
                  className="p-1 text-indigo-400 text-shadow hover:text-indigo-200 flex"
                  onClick={() => this.viewTeams("B10")}
                >
                  <div>Big-10</div>
                  <div className="ml-4">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      rotation={`${this.state.big10Visible ? 180 : ""}`}
                    />
                  </div>
                </div>
              </li>
              <ul
                className={`p-1 pl-2 ${
                  this.state.big10Visible ? "visible" : "hidden"
                }`}
              >
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Northwestern">Northwestern</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Indiana">Indiana</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Maryland">Maryland</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Michigan%20State">Michigan State</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Michigan">Michigan</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Minnesota">Minnesota</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Nebraska">Nebraska</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Rutgers">Rutgers</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Ohio%20State">Ohio State</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Penn%20State">Penn State</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Wisconsin">Wisconsin</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Illinois">Illinois</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Iowa">Iowa</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Purdue">Purdue</Link>
                </li>
              </ul>
              <li>
                <div
                  className="p-1 text-indigo-400 text-shadow hover:text-indigo-200 flex"
                  onClick={() => this.viewTeams("B12")}
                >
                  <div>Big-12</div>
                  <div className="ml-4">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      rotation={`${this.state.big12Visible ? 180 : ""}`}
                    />
                  </div>
                </div>
              </li>
              <ul
                className={`p-1 pl-2 ${
                  this.state.big12Visible ? "visible" : "hidden"
                }`}
              >
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Iowa%20State">Iowa State</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Oklahoma%20State">Oklahoma State</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Oklahoma">Oklahoma</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Baylor">Baylor</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Texas">Texas</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/West%20Virginia">West Virginia</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Kansas">Kansas</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Kansas%20State">Kansas State</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/TCU">TCU</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Texas%20Tech">Texas Tech</Link>
                </li>
              </ul>
              <li>
                <div
                  className="p-1 text-indigo-400 text-shadow hover:text-indigo-200 flex"
                  onClick={() => this.viewTeams("P12")}
                >
                  <div>Pac-12</div>
                  <div className="ml-4">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      rotation={`${this.state.pac12Visible ? 180 : ""}`}
                    />
                  </div>
                </div>
              </li>
              <ul
                className={`p-1 pl-2 ${
                  this.state.pac12Visible ? "visible" : "hidden"
                }`}
              >
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Arizona%20State">Arizona State</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Arizona">Arizona</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Stanford">Stanford</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/California">California</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/UCLA">UCLA</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/USC">USC</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Colorado">Colorado</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Oregon%20State">Oregon State</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Utah">Utah</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Washington">Washington</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Washington%20State">Washington State</Link>
                </li>
                <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                  <Link to="/team/Oregon">Oregon</Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="p-1 text-indigo-400 hover:text-indigo-200 text-shadow cursor-pointer">
          <div>
            <Link to="/rankings">Rankings</Link>
          </div>
        </div>
        <div className="p-1 text-indigo-400 hover:text-indigo-200 text-shadow cursor-pointer">
          <div>
            <Link to="/recruits">Recruits</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
