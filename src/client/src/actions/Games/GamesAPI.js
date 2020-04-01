import axios from "axios";

export function getAllGames(payload) {
  return (dispatch, getState) => {
    axios.get(`/api/games/history/${payload}`).then(res => {
      console.log(res);
    });
  };
}

export function getMatchupHistory(pl1, pl2) {
  return (dispatch, getState) => {
    axios.get(`/api/games/matchup/${pl1}/${pl2}`).then(res => {
      console.log(res);
    });
  };
}
