import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { setTeam } from '../../actions/index'
import Team from '../Teams/Team'

const mapDispatchToProps = dispatch => {
    return {
        setTeam: team => dispatch(setTeam(team)), 
        // fetchTeamData: team => dispatch(fetchTeamData(team))
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        teams: state.teamReducer.data
    }
}



class ConferenceOne extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <div className="flex flex-row justify-center flex-wrap">
                {this.props.teams ? this.props.teams.map(team => {
                    return (
                        <div onClick={() => setTeam(team)} key={team['id']} className="m-8">
                            <Link className="Link-style" to={`/team/${team['alt_name3']}`}>{team['alt_name3']}</Link>
                        </div>
                    )
                }) : ''}
                <Route path={`/team/:teamName`} component={Team} />
            </div>
    
        )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ConferenceOne)