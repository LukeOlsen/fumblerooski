import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from "react-redux";
import ConferenceOne from './Conference'
import { fetchConferenceData } from '../../actions/actionsAPI'

const mapDispatchToProps = dispatch => {
    return {
        // setTeam: team => dispatch(setTeam(team)), 
        fetchConferenceData: conference => dispatch(fetchConferenceData(conference))
    }
}

const mapStateToProps = state => {
    return {

    }
}
 
class Conferences extends Component {
    constructor(props) {
        super(props) 

        this.state ={
            conferences: ['SEC', 'ACC', 'Pac-12', 'Big-10', 'Big-12']
        }

    }


    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                 <h1 className="mb-8 text-6xl">Conferences</h1>
                 <div className="flex flex-row justify-center">
                    {this.state.conferences.map((conference, id) => {
                        return <div onClick={() => this.props.fetchConferenceData(conference)}  className="m-8" key={id+conference}>
                                    <Link className="Link-style" to={`${this.props.match.url}/${conference}`}>{conference}</Link>
                                </div>
                    })}
                 </div>

                 <Route path={`${this.props.match.path}/:conferenceName`} component={ConferenceOne} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conferences)