import axios from "axios";
import {
  setTeamData,
  doneLoading,
  setTeamSPRank,
  setConferenceSPRank,
  preloadAppData,
  loading,
} from "../index";

export function getTeamData(team, year) {
  return (dispatch, getState) => {
    axios.get(`/api/team/teamData/${team}/${year}`).then((res) => {
      dispatch(setTeamData(res.data));
      dispatch(doneLoading());
    });
  };
}

export function getTeamSPRanking(team, year, side) {
  return (dispatch) => {
    axios
      .get(`/api/team/teamSPRank/${team}/${year}/${side}`)
      .then((res, team, year, side) => {
        dispatch(setTeamSPRank(res.data));
      });
  };
}

export function getConferenceSPRanking(conference, year, side) {
  return (dispatch) => {
    axios
      .get(`/api/team/conferenceSPRank/${conference}/${year}/${side}`)
      .then((res) => {
        dispatch(setConferenceSPRank(res.data));
      });
  };
}

export function preloadData() {
  return (dispatch) => {
    dispatch(loading);
    axios.get(`/api/preload`).then((res) => {
      console.log(res.data);
      dispatch(preloadAppData(res.data));
      dispatch(doneLoading);
    });
  };
}
