import axios from "axios";

export function getAllGames(payload) {
  console.log(payload);
  return (dispatch, getState) => {
    axios.get(`/api/games/history/${payload}`).then(res => {
      console.log(res);
    });
  };
}

export function getMatchupHistory(payload) {
  console.log(payload);
}
