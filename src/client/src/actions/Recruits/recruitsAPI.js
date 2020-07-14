import Axios from "axios";
import { setRecruits } from "../index";

export function getTeamRecruiting(payload) {
  return (dispatch, getState) => {
    Axios.get(`/api/recruit/${payload.team}/${payload.year}`).then((res) => {
      dispatch(setRecruits(res.data));
    });
  };
}
