import initialData from "../data/data";
import { SET_RANKINGS } from "../constants/action-types";

export default function rankingsReducer(
  state = { rankings: { apRank: [], cfpRank: [] } },
  action
) {
  if (action.type === SET_RANKINGS) {
    let apRankings = [];
    let cfpRankings = [];
    action.payload[0].polls.forEach((rank) => {
      if (rank.poll === "AP Top 25") {
        apRankings = rank;
      } else if (rank.poll === "Playoff Committee Rankings") {
        cfpRankings = rank;
      }
    });
    return Object.assign({}, state, {
      ...state,
      rankings: {
        apRank: apRankings,
        cfpRank: cfpRankings,
      },
    });
  }
  return state;
}
