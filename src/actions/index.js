import { SET_TEAM } from '../constants/action-types'

export function setTeam(payload) {
    return {type: SET_TEAM, payload}
}