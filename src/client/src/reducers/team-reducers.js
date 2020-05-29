import {
  SET_TEAM,
  SET_CONFERENCE,
  SET_TEAM_DATA,
} from "../constants/action-types";
import teamsList from "../data/teamsList";
import initialTeams from "../data/defaultTeams";

export default function teamReducer(state = initialTeams, action) {
  if (action.type === SET_CONFERENCE) {
    return Object.assign({}, state, {
      ...state,
      data: action.payload,
    });
  } else if (action.type === SET_TEAM_DATA) {
    console.log(action.payload);
    return Object.assign({}, state, {
      ...state,
      teamInfo: action.payload[0],
      latestRecruits: action.payload[1],
      latestTalentRating: action.payload[2],
      ppaAverages: action.payload[4],
      BCR: action.payload[5],
      yearRecord: action.payload[6],
    });
  }
  return state;
}
