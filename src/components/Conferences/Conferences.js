import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ConferenceOne from './Conference'
import '../../styles/Conferences/Conferences.css'
 
export default class Conferences extends Component {
    constructor(props) {
        super(props) 

        this.state ={
            conferences: ['SEC', 'ACC', 'Pac-12', 'Big-10', 'Big-12']
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
                 <div className="conference-box">
                    {this.state.conferences.map((conference, id) => {
                        return <div className="conference-title" key={id}>
                                    <Link className="Link-style" to={`${this.props.match.url}/${conference}`}>{conference}</Link>
                                </div>
                    })}
                 </div>

                 <Route path={`${this.props.match.path}/:conferenceName`} component={ConferenceOne} />
            </div>
        )
    }
}