import initialData from '../data/data';
import { SET_RECRUITS } from '../constants/action-types'; 

export default function recruitingReducer(state = {recruits: {}}, action) {
    if (action.type === SET_RECRUITS) {
        return Object.assign({}, state, {
            ...state,
            recruits: action.payload
        })
    }
    return state
}