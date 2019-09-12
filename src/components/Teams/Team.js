import React, { Component } from 'react';
import { directive } from '@babel/types';


class Team extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div>
                    <h1>Welcome to your team</h1>
                    <h2>{this.props.match.params.teamName}</h2>
                </div>
            </div>
        )
    }
}

export default Team;