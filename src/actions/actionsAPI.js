import Axios from 'axios'
import { setTeam, setData, setConference } from './index'

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