import React, { Component } from 'react';
import { directive } from '@babel/types';


class Team extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <h1 className="mt-8 text-6xl">Welcome to your team</h1>
                    <h2 className="text-6xl mt-8">{this.props.match.params.teamName}</h2>
                </div>
            </div>
        )
    }
}

export default Team;