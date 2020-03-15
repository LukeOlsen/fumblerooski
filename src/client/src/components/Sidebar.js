import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="h-screen bg-gray-700 pr-10 pl-2">
        <div className="p-1 pt-6 text-indigo-400 hover:text-indigo-200 cursor-pointer ">
          <div>
            <Link className="w-full h-full" to="/">
              Home
            </Link>
          </div>
        </div>
        <div className="p-1 text-indigo-400 hover:text-indigo-200 cursor-pointer">
          <div>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="p-1 text-indigo-400 hover:text-indigo-200 cursor-pointer">
          <div>
            <Link to="/conferences">Conferences</Link>
          </div>
        </div>
        <div className="p-1 text-indigo-400 hover:text-indigo-200 cursor-pointer">
          <div>
            <Link to="/rankings">Rankings</Link>
          </div>
        </div>
        <div className="p-1 text-indigo-400 hover:text-indigo-200 cursor-pointer">
          <div>
            <Link to="/recruits">Recruits</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
