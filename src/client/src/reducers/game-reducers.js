import {
  GET_GAME_HISTORY,
  GET_MATCHUP_HISTORY,
  GET_ABS
} from "../constants/action-types";

export default function gamesReducer(
  state = { gameHistory: [], matchupHistory: [] },
  action
) {
  if (action.type === GET_GAME_HISTORY) {
    console.log(action.payload);
    return Object.assign({}, state, {
      ...state,
      gameHistory: action.payload,
      matchupHistory: []
    });
  } else if (action.type === GET_MATCHUP_HISTORY) {
    return Object.assign({}, state, {
      ...state,
      matchupHistory: action.payload,
      gameHistory: []
    });
  } else if (action.type === GET_ABS) {
    return Object.assign({}, state, {
      ...state,
      gameAbs: action.payload
    });
  } else {
    return state;
  }
}
