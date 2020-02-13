import Axios from "axios";
import { setRecruits } from "../index";

export function getTeamRecruiting(payload) {
  console.log(payload);
  return (dispatch, getState) => {
    Axios.get(`/api/recruit/${payload.team}/${payload.year}`).then(res => {
      console.log(res.data);
      dispatch(setRecruits(res.data));
    });
  };
}
