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
                    <h1>Welcome to your team</h1>
                    <h2>{}</h2>
                </div>
            </div>
        )
    }
}

export default Team;