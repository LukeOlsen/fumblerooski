import Axios from "axios";
import {
  setTeam,
  setData,
  setConference,
  setRankings,
  setRecruits,
} from "./index";

export function fetchConferenceData(payload) {
  return (dispatch, getState) => {
    Axios.get("/api/conference/" + payload).then((res) => {
      let confTeams = [];
      res.data.forEach((team) => {
        confTeams.push(team.school);
      });
      dispatch(setConference(confTeams));
    });
  };
}

export function getRankings(payload) {
  return (dispatch, getState) => {
    Axios.get(
      "https://api.collegefootballdata.com/rankings?week=" +
        payload.week +
        "&year=" +
        payload.year
    ).then((res) => {
      dispatch(setRankings(res.data));
    });
  };
}
