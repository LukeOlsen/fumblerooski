import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar bg-gray-500 text-center border-gray-600 border-r-2">
        <div className="item-nav-container top-item bg-indigo-500 hover:bg-indigo-700 cursor-pointer">
          <div>
            <Link className="w-full h-full" to="/">
              Home
            </Link>
          </div>
        </div>
        <div className="item-nav-container bg-indigo-500 hover:bg-indigo-700 cursor-pointer">
          <div>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="item-nav-container bg-indigo-500 hover:bg-indigo-700 cursor-pointer">
          <div>
            <Link to="/conferences">Conferences</Link>
          </div>
        </div>
        <div className="item-nav-container bg-indigo-500 hover:bg-indigo-700 cursor-pointer">
          <div>
            <Link to="/rankings">Rankings</Link>
          </div>
        </div>
        <div className="item-nav-container bg-indigo-500 hover:bg-indigo-700 cursor-pointer">
          <div>
            <Link to="/recruits">Recruits</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
