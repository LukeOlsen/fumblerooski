import Axios from 'axios'
import { setTeam, setData, setConference, setRankings } from './index'

export function fetchConferenceData(payload) {
    return (dispatch, getState) => {
        //B12
        //PAC
        Axios.get('https://api.collegefootballdata.com/teams?conference='+payload)
            .then(res => {
                dispatch(setConference(res.data));
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