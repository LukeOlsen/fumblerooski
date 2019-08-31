import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Conferences extends Component {
    constructor(props) {
        super(props) 

        this.state ={
            conferences: ['SEC', 'ACC', 'PAC-12', 'Big-10', 'Big-12']
        }

    }


    componentDidMount() {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                 <h1>Conferences</h1>
                 {this.state.conferences.map(conference => {
                     return <div><Link to={`conference/${conference}`}>{conference}</Link></div>
                 })}
            </div>
        )
    }
}

export default Conferences