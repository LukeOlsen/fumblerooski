import {
  GET_GAME_HISTORY,
  GET_MATCHUP_HISTORY,
  GET_ABS,
  OPEN_GAME_POPUP,
  CLOSE_GAME_POPUP,
} from "../constants/action-types";

export default function gamesReducer(
  state = { gameHistory: [], matchupHistory: [] },
  action
) {
  if (action.type === GET_GAME_HISTORY) {
    return Object.assign({}, state, {
      ...state,
      gameHistory: action.payload,
      matchupHistory: [],
    });
  } else if (action.type === GET_MATCHUP_HISTORY) {
    return Object.assign({}, state, {
      ...state,
      matchupHistory: action.payload,
      gameHistory: [],
    });
  } else if (action.type === GET_ABS) {
    return Object.assign({}, state, {
      ...state,
      gameAbs: action.payload[0],
      gameStats: action.payload[1],
      gameDrives: action.payload[2],
    });
  } else if (action.type === OPEN_GAME_POPUP) {
    return Object.assign({}, state, {
      ...state,
      gamePopupOpen: true,
    });
  } else if (action.type === CLOSE_GAME_POPUP) {
    return Object.assign({}, state, {
      ...state,
      gamePopupOpen: false,
    });
  } else {
    return state;
  }
}
