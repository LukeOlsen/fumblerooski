import axios from "axios";
import { getGameHistory, getMatchups } from "../index";

export function getAllGames(payload) {
  return (dispatch, getState) => {
    axios.get(`/api/games/history/${payload}`).then(res => {
      dispatch(getGameHistory(res.data));
    });
  };
}

export function getMatchupHistory(pl1, pl2) {
  return (dispatch, getState) => {
    axios.get(`/api/games/matchup/${pl1}/${pl2}`).then(res => {
      dispatch(getMatchups(res.data));
    });
  };
}
