import {
  SET_TEAM,
  SET_CONFERENCE,
  SET_TEAM_DATA
} from "../constants/action-types";
import teamsList from "../data/teamsList";

export default function teamReducer(state = { teamsList: teamsList }, action) {
  if (action.type === SET_TEAM) {
    console.log(action.payload);
    return Object.assign({}, state, {
      ...state,
      team: action.payload
    });
  } else if (action.type === SET_CONFERENCE) {
    return Object.assign({}, state, {
      ...state,
      data: action.payload
    });
  } else if (action.type === SET_TEAM_DATA) {
    console.log(action.payload);
    return Object.assign({}, state, {
      ...state,
      teamData: action.payload
    });
  }
  return state;
}
