import { SET_RECRUITS } from '../constants/action-types'; 

export function recruitingReducer(state, action) {
    if (action.type === SET_RECRUITS) {
        return Object.assign({}, state, {
            ...state,
            recruits: action.payload
        })
    }
}