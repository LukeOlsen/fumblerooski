import axios from "axios";
import { getGameHistory, getMatchups, getAbs, doneLoading } from "../index";
import { openGamePopup } from "./GamesIndex";

export function getAllGames(payload) {
  return (dispatch, getState) => {
    axios.get(`/api/games/history/${payload}`).then((res) => {
      dispatch(getGameHistory(res.data));
      dispatch(doneLoading());
    });
  };
}

export function getMatchupHistory(pl1, pl2) {
  return (dispatch, getState) => {
    axios.get(`/api/games/matchup/${pl1}/${pl2}`).then((res) => {
      dispatch(getMatchups(res.data));
      dispatch(doneLoading());
    });
  };
}

export function getAdvancedBoxedScores(gameID) {
  return (dispatch) => {
    axios.get(`/api/games/ABS/${gameID}`).then((res) => {
      dispatch(getAbs(res.data));
      dispatch(openGamePopup());
      dispatch(doneLoading());
    });
  };
}
