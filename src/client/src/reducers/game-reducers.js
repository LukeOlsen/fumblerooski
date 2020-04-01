import {
  GET_GAME_HISTORY,
  GET_MATCHUP_HISTORY
} from "../constants/action-types";

export default function gamesReducer(state, action) {
  if (action.type === GET_GAME_HISTORY) {
    console.log(action.payload);
    return Object.assign({}, state, {
      ...state,
      gameHistory: action.payload
    });
  } else if (action.type === GET_MATCHUP_HISTORY) {
    return Object.assign({}, state, {
      ...state,
      matchupHistory: action.payload
    });
  } else {
    return state;
  }
}
