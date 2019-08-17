import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

class Sidebar extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <div class="navbar">
                <div class="item-nav-container top-item">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                </div>
                <div class="item-nav-container">
                    <div>
                        <Link to="/about">About</Link>
                    </div>
                </div>
                <div class="item-nav-container">
                    <div>
                        <Link to="/users">Users</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;