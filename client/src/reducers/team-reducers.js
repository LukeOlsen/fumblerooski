import { SET_TEAM, SET_CONFERENCE } from '../constants/action-types';
import teamsList from '../data/teamsList';

export default function teamReducer(state = {teamsList: teamsList}, action) {
    if (action.type === SET_TEAM) {
        return Object.assign({}, state, {
            ...state,
            team: action.payload
        })
    } else if (action.type === SET_CONFERENCE) {
        return Object.assign({}, state, {
            ...state,
            data: action.payload
        })
    } 
    return state
}