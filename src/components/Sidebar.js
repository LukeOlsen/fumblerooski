import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

class Sidebar extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <div className="navbar">
                <div className="item-nav-container top-item">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                </div>
                <div className="item-nav-container">
                    <div>
                        <Link to="/about">About</Link>
                    </div>
                </div>
                <div className="item-nav-container">
                    <div>
                        <Link to="/users">Users</Link>
                    </div>
                </div>
                <div className="item-nav-container">
                    <div>
                        <Link to="/conferences">conferences</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;