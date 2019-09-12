import React from 'react';
import { Link, Route } from 'react-router-dom';
import Team from '../Teams/Team'
import '../../styles/Conferences/Conferences.css'
 

const teams = {
    "SEC": ['Florida', 'Alabama', 'Georgia', 'LSU'],
    "Big-12": ['Texas', 'Oklahoma', 'Texas', 'Texas Tech'],
    "Pac-12": ['USC', 'Cal', 'Stanford', 'Oregon'],
    "Big-10": ['An Ohio State', 'Michigan', 'Penn State', 'MSU'],
    "ACC": ['FSU', 'Miami', 'UNC', 'Virginia']
} 

const ConferenceOne = ({match}) => {

    console.log(match)
    let test = match.params.conferenceName
    console.log(test)

    return (
        <div className="teams-display">
            {teams[test].map(team => {
                return (
                    <div className="conference-title">
                        <Link className="Link-style" to={`/team/${team}`} >{team}</Link>
                    </div>
                )
            })}
            <Route path={`/team/:teamName`} component={Team} />
        </div>

    )
}

export default ConferenceOne