import { SET_RANKINGS } from '../constants/action-types'


export default function rankingsReducer(state = [], action) {
    if (action.type === SET_RANKINGS) {
        console.log(action.payload)
        let apRankings = [];
        let cfpRankings = [];
        action.payload[0].polls.forEach(rank => {
            if (rank.poll === "AP Top 25") {
                apRankings = rank
            } else if (rank.poll === "Playoff Committee Rankings") {
                   cfpRankings = rank
            }
        })
        return Object.assign({}, state, {
            ...state,
            rankings: {
                "AP": apRankings,
                "CFP": cfpRankings
            }
        })
    }
    return state
}