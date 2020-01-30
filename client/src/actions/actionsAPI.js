import Axios from 'axios'
import { setTeam, setData, setConference, setRankings, setRecruits } from './index'

export function fetchConferenceData(payload) {
    return (dispatch, getState) => {
        //B12
        //PAC
        console.log(payload)
        Axios.get('/api/conference/'+payload)
            .then(res => {
                let confTeams = []
                res.data.forEach(team => {
                    confTeams.push(team.school)
                })
                console.log(confTeams)
                dispatch(setConference(confTeams));
            })
    }
}

export function getRankings(payload) {
    console.log(payload)
    return (dispatch, getState) => {
        Axios.get('https://api.collegefootballdata.com/rankings?week='+payload.week+'&year='+payload.year)
        .then(res => {
            dispatch(setRankings(res.data))
        })
    }
}

export function getTeamRecruiting(payload) {
    console.log(payload)
    return (dispatch, getState) => {
        Axios.get(`https://api.collegefootballdata.com/recruiting/players?year=${payload.year}&classification=HighSchool&team=${payload.team}`)
        .then(res => {
            console.log(res.data)
            dispatch(setRecruits(res.data))
        })
    }
}