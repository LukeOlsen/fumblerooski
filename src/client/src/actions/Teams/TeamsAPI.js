import axios from "axios";
import { setTeamData, doneLoading } from "../index";

export function getTeamData(team, year) {
  return (dispatch, getState) => {
    axios.get(`/api/team/teamData/${team}/${year}`).then((res) => {
      dispatch(setTeamData(res.data));
      dispatch(doneLoading());
    });
  };
}
