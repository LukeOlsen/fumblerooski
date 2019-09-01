import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ConferenceOne from './Conference'

function  SingleConference({match}) {
    return <ConferenceOne match={match} />
}

class Conferences extends Component {
    constructor(props) {
        super(props) 

        this.state ={
            conferences: ['SEC', 'ACC', 'PAC-12', 'Big-10', 'Big-12']
        }

    }


    componentDidMount() {
        
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                 <h1>Conferences</h1>
                 {this.state.conferences.map((conference, id) => {
                     return <div key={id}>
                                <Link to={`${this.props.match.url}/${conference}`}>{conference}</Link>
                            </div>
                 })}

                 <Route path={`${this.props.match.path}/:conferenceID`} component={ConferenceOne} />
            </div>
        )
    }
}

export default Conferences