import { SET_TEAM, SET_DATA, SET_CONFERENCE, SET_RANKINGS, SET_RECRUITS } from '../constants/action-types'

export function setTeam(payload) {
    return {type: SET_TEAM, payload}
}

export function setData(payload) {
    return {type: SET_DATA, payload}
}

export function setConference(payload) {
    return {type: SET_CONFERENCE, payload}
}

export function setRankings(payload) {
    return {type: SET_RANKINGS, payload}
}

export function setRecruits(payload) {
    return {type: SET_RECRUITS, payload}
}