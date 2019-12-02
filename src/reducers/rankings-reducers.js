import { SET_RANKINGS } from '../constants/action-types'


export default function rankingsReducer(state = [], action) {
    if (action.type === SET_RANKINGS) {
        return Object.assign({}, state, {
            ...state,
            rankings: {
                AP: action.payload[0].polls[1].ranks,
                Playoff: action.payload[0].polls[3].ranks
            }
        })
    }
    return state
}