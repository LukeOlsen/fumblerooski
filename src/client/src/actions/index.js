import {
  SET_TEAM,
  SET_DATA,
  SET_CONFERENCE,
  SET_RANKINGS,
  SET_RECRUITS,
  SET_TEAM_DATA,
  GET_GAME_HISTORY,
  GET_MATCHUP_HISTORY,
  GET_ABS,
  LOADING,
  DONE_LOADING,
  SET_TEAM_SPRANK,
} from "../constants/action-types";

export function setTeam(payload) {
  return { type: SET_TEAM, payload };
}

export function setData(payload) {
  return { type: SET_DATA, payload };
}

export function setConference(payload) {
  return { type: SET_CONFERENCE, payload };
}

export function setRankings(payload) {
  return { type: SET_RANKINGS, payload };
}

export function setRecruits(payload) {
  return { type: SET_RECRUITS, payload };
}

export function setTeamData(payload) {
  return { type: SET_TEAM_DATA, payload };
}

export function getGameHistory(payload) {
  return { type: GET_GAME_HISTORY, payload };
}

export function getMatchups(payload) {
  return { type: GET_MATCHUP_HISTORY, payload };
}

export function getAbs(payload) {
  return { type: GET_ABS, payload };
}

export function loading(payload) {
  return { type: LOADING, payload };
}

export function doneLoading(payload) {
  return { type: DONE_LOADING, payload };
}

export function setTeamSPRank(payload) {
  return { type: SET_TEAM_SPRANK, payload };
}
