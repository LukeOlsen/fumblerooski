import axios from "axios";
import { setTeamData, doneLoading, setTeamSPRank } from "../index";

export function getTeamData(team, year) {
  return (dispatch, getState) => {
    axios.get(`/api/team/teamData/${team}/${year}`).then((res) => {
      dispatch(setTeamData(res.data));
      dispatch(doneLoading());
    });
  };
}

export function getTeamSPRanking(team, year) {
  console.log(team, year);
  return (dispatch) => {
    axios.get(`/api/team/teamSPRank/${team}/${year}`).then((res) => {
      console.log(res);
      dispatch(setTeamSPRank(res.data));
    });
  };
}
