import { combineReducers } from "redux";
import teamReducer from "./team-reducers";
import rankingsReducer from "./rankings-reducers";
import recruitingReducer from "./recruiting-reducers";
import gamesReducer from "./game-reducers";
import generalReducer from "./general-reducers";

export default combineReducers({
  teamReducer,
  rankingsReducer,
  recruitingReducer,
  gamesReducer,
  generalReducer,
});
