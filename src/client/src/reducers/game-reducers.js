import { GET_GAME_HISTORY } from "../constants/action-types";

export default function gamesReducer(state, action) {
  if (action.type === GET_GAME_HISTORY) {
    console.log(action.payload);
  } else {
    return state;
  }
}
