import { LOADING, DONE_LOADING } from "../constants/action-types";

export default function generalReducer(state = { isLoading: true }, action) {
  if (action.type === LOADING) {
    return Object.assign({}, state, {
      ...state,
      isLoading: true,
    });
  } else if (action.type === DONE_LOADING) {
    return Object.assign({}, state, {
      ...state,
      isLoading: false,
    });
  } else {
    return state;
  }
}
