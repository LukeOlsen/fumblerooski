import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ConferenceOne extends Component {
    constructor(props) {
        super(props) 

        this.state ={
        }

    }


    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                 <h1>test</h1>
            </div>
        )
    }
}

export default ConferenceOne