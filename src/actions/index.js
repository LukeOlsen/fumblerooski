import { SET_TEAM, SET_DATA } from '../constants/action-types'

export function setTeam(payload) {
    return {type: SET_TEAM, payload}
}

export function setData(payload) {
    return {type: SET_DATA, payload}
}