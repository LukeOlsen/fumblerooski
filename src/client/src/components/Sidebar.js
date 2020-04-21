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
          <Link to="/conferences">
            <div className="text-indigo-400 text-shadow hover:text-indigo-200 flex justify-between">
              <div>Conferences</div>
            </div>
          </Link>
          <div className={`pl-3`}>
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
                      rotation={`${this.state.secVisible ? 180 : ""}`}
                    />
                  </div>
                </div>
                <ul
                  className={`p-1 pl-2 ${
                    this.state.secVisible ? "visible" : "hidden"
                  }`}
                >
                  <Link to="/team/Alabama">
                    <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                      Alabama
                    </li>
                  </Link>
                  <Link to="/team/Auburn">
                    <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                      Auburn
                    </li>
                  </Link>
                  <Link to="/team/Arkansas">
                    <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                      Arkansas
                    </li>
                  </Link>
                  <Link to="/team/Florida">
                    <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                      Florida
                    </li>
                  </Link>
                  <Link to="/team/Georgia">
                    <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                      Georgia
                    </li>
                  </Link>
                  <Link to="/team/Kentucky">
                    <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                      Kentucky
                    </li>
                  </Link>
                  <Link to="/team/LSU">
                    <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                      LSU
                    </li>
                  </Link>
                  <Link to="/team/Missouri">
                    <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                      Missouri
                    </li>
                  </Link>
                  <Link to="/team/Ole%20Miss">
                    <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                      Ole Miss
                    </li>
                  </Link>
                  <Link to="/team/Vanderbilt">
                    <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                      Vanderbilt
                    </li>
                  </Link>
                  <Link to="/team/Texas%20A&M">
                    <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                      Texas A&M
                    </li>
                  </Link>
                  <Link to="/team/Mississippi%20State">
                    <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                      Mississippi State
                    </li>
                  </Link>
                  <Link to="/team/South%20Carolina">
                    <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                      South Carolina
                    </li>
                  </Link>
                  <Link to="/team/Tennessee">
                    <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                      Tennessee
                    </li>
                  </Link>
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
                      rotation={`${this.state.accVisible ? 180 : ""}`}
                    />
                  </div>
                </div>
              </li>
              <ul
                className={`p-1 pl-2 ${
                  this.state.accVisible ? "visible" : "hidden"
                }`}
              >
                <Link to="/team/Florida%20State">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Florida State
                  </li>
                </Link>
                <Link to="/team/Georgia%20Tech">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Georgia Tech
                  </li>
                </Link>
                <Link to="/team/Louisville">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Louisville
                  </li>
                </Link>
                <Link to="/team/Boston%20College">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Boston College
                  </li>
                </Link>
                <Link to="/team/NC%20State">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    NC State
                  </li>
                </Link>
                <Link to="/team/Duke">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Duke
                  </li>
                </Link>
                <Link to="/team/North%20Carolina">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    North Carolina
                  </li>
                </Link>
                <Link to="/team/Wake%20Forest">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Wake Forest
                  </li>
                </Link>
                <Link to="/team/Syracuse">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Syracuse
                  </li>
                </Link>
                <Link to="/team/Pittsburgh">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Pittsburgh
                  </li>
                </Link>
                <Link to="/team/Clemson">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Clemson
                  </li>
                </Link>
                <Link to="/team/Virginia">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Virginia
                  </li>
                </Link>
                <Link to="/team/Virginia%20Tech">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Virginia Tech
                  </li>
                </Link>
                <Link to="/team/Miami">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Miami
                  </li>
                </Link>
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
                <Link to="/team/Northwestern">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Northwestern
                  </li>
                </Link>
                <Link to="/team/Indiana">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Indiana
                  </li>
                </Link>
                <Link to="/team/Maryland">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Maryland
                  </li>
                </Link>
                <Link to="/team/Michigan%20State">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Michigan State
                  </li>
                </Link>
                <Link to="/team/Michigan">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Michigan
                  </li>
                </Link>
                <Link to="/team/Minnesota">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Minnesota
                  </li>
                </Link>
                <Link to="/team/Nebraska">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Nebraska
                  </li>
                </Link>
                <Link to="/team/Rutgers">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Rutgers
                  </li>
                </Link>
                <Link to="/team/Ohio%20State">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Ohio State
                  </li>
                </Link>
                <Link to="/team/Penn%20State">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Penn State
                  </li>
                </Link>
                <Link to="/team/Wisconsin">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Wisconsin
                  </li>
                </Link>
                <Link to="/team/Illinois">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Illinois
                  </li>
                </Link>
                <Link to="/team/Iowa">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Iowa
                  </li>
                </Link>
                <Link to="/team/Purdue">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Purdue
                  </li>
                </Link>
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
                <Link to="/team/Iowa%20State">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Iowa State
                  </li>
                </Link>
                <Link to="/team/Oklahoma%20State">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Oklahoma State
                  </li>
                </Link>
                <Link to="/team/Oklahoma">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Oklahoma
                  </li>
                </Link>
                <Link to="/team/Baylor">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Baylor
                  </li>
                </Link>
                <Link to="/team/Texas">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Texas
                  </li>
                </Link>
                <Link to="/team/West%20Virginia">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    West Virginia
                  </li>
                </Link>
                <Link to="/team/Kansas">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Kansas
                  </li>
                </Link>
                <Link to="/team/Kansas%20State">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Kansas State
                  </li>
                </Link>
                <Link to="/team/TCU">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    TCU
                  </li>
                </Link>
                <Link to="/team/Texas%20Tech">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Texas Tech
                  </li>
                </Link>
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
                <Link to="/team/Arizona%20State">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Arizona State
                  </li>
                </Link>
                <Link to="/team/Arizona">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Arizona
                  </li>
                </Link>
                <Link to="/team/Stanford">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Stanford
                  </li>
                </Link>
                <Link to="/team/California">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    California
                  </li>
                </Link>
                <Link to="/team/UCLA">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    UCLA
                  </li>
                </Link>
                <Link to="/team/USC">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    USC
                  </li>
                </Link>
                <Link to="/team/Colorado">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Colorado
                  </li>
                </Link>
                <Link to="/team/Oregon%20State">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Oregon State
                  </li>
                </Link>
                <Link to="/team/Utah">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Utah
                  </li>
                </Link>
                <Link to="/team/Washington">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Washington
                  </li>
                </Link>
                <Link to="/team/Washington%20State">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Washington State
                  </li>
                </Link>
                <Link to="/team/Oregon">
                  <li className="my-1 text-indigo-400 text-shadow hover:text-indigo-200">
                    Oregon
                  </li>
                </Link>
              </ul>
            </ul>
          </div>
        </div>
        {/* <div className="p-1 text-indigo-400 hover:text-indigo-200 text-shadow cursor-pointer">
          <div>
            <Link to="/rankings">Rankings</Link>
          </div>
        </div>
        <div className="p-1 text-indigo-400 hover:text-indigo-200 text-shadow cursor-pointer">
          <div>
            <Link to="/recruits">Recruits</Link>
          </div>
        </div> */}
        <div className="p-1 text-indigo-400 hover:text-indigo-200 text-shadow cursor-pointer">
          <div>
            <Link to="/games">Games</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
