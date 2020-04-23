import axios from "axios";
import { setTeamData } from "../index";

export function getTeamData(team, year) {
  console.log(team);
  console.log(year);
  return (dispatch, getState) => {
    axios.get(`/api/team/teamData/${team}/${year}`).then(res => {
      console.log(res.data);
      dispatch(setTeamData(res.data));
    });
  };
}
