import { SET_TEAM } from '../constants/action-types'

export default function teamReducer(state = [], action) {
    if (action.type === SET_TEAM) {
        console.log(action)
        return state
    }
    return state
}