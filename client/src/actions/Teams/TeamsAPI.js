import axios from "axios";
import { setTeamData } from "../index";

export function getTeamData(payload) {
  return (dispatch, getState) => {
    axios.get(`/api/teamData/${payload}`).then(res => {
      dispatch(setTeamData(res.data[0]));
    });
  };
}
