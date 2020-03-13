import axios from "axios";
import { setTeamData } from "../index";

export function getTeamData(payload) {
  return (dispatch, getState) => {
    axios.get(`/api/teamData/${payload}`).then(res => {
      console.log(res.data);
      dispatch(setTeamData(res.data));
    });
  };
}