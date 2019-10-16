import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { setTeam } from '../../actions/index'
import Team from '../Teams/Team'
 

const teams = {
    "SEC": ['Florida', 'Alabama', 'Georgia', 'LSU'],
    "Big-12": ['Texas', 'Oklahoma', 'Texas', 'Texas Tech'],
    "Pac-12": ['USC', 'Cal', 'Stanford', 'Oregon'],
    "Big-10": ['An Ohio State', 'Michigan', 'Penn State', 'MSU'],
    "ACC": ['FSU', 'Miami', 'UNC', 'Virginia']
} 

const mapDispatchToProps = dispatch => {
    return {
        setTeam: team => dispatch(setTeam(team)) 
    }
}

const mapStateToProps = state => {
    return {

    }
}



const ConferenceOne = ({match, setTeam}) => {

    let conference = match.params.conferenceName

    return (
        <div className="flex flex-row justify-center">
            {teams[conference].map(team => {
                return (
                    <div onClick={() => setTeam(team)} className="m-8">
                        <Link className="Link-style" to={`/team/${team}`} >{team}</Link>
                    </div>
                )
            })}
            <Route path={`/team/:teamName`} component={Team} />
        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConferenceOne)