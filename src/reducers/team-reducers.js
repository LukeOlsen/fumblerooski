import { SET_TEAM } from '../constants/action-types'

export default function teamReducer(state = [], action) {
    if (action.type === SET_TEAM) {
        return Object.assign({}, state, {
            ...state,
            team: action.payload
        })
    } else if (action.type == "SET_DATA") {
        console.log(action.payload)
        return Object.assign({}, state, {
            ...state,
            data: action.payload.data
        })
    }
    return state
}