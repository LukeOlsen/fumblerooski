import Axios from 'axios'
import { setTeam, setData } from './index'

export function fetchConferenceData(payload) {
    return (dispatch, getState) => {
        //B12
        //PAC
        Axios.get('https://api.collegefootballdata.com/teams?conference='+payload)
            .then(res => {
                console.log(res.data);
                dispatch(setTeam(payload));
                dispatch(setData(res));
            })
        let tempState = getState()
        console.log(tempState)
    }
}