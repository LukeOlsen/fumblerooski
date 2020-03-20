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
    }
  }

  render() {
    return (
      <div className="h-screen bg-gray-700 w-48 fixed">
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
              <li className="p-1 text-indigo-400 text-shadow hover:text-indigo-200">
                <Link to="/conferences/Big10">Big-10</Link>
              </li>
              <li className="p-1 text-indigo-400 text-shadow hover:text-indigo-200">
                <Link to="/conferences/Big12">Big-12</Link>
              </li>
              <li className="p-1 text-indigo-400 text-shadow hover:text-indigo-200">
                <Link to="/conferences/Pac12">Pac-12</Link>
              </li>
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
