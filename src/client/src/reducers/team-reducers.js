import {
  SET_TEAM,
  SET_CONFERENCE,
  SET_TEAM_DATA,
  SET_TEAM_SPRANK,
  SET_CONFERENCE_SPRANK,
  PRELOAD_APP_DATA,
} from "../constants/action-types";
import teamsList from "../data/teamsList";
import initialTeams from "../data/defaultTeams";

export default function teamReducer(state = initialTeams, action) {
  if (action.type === SET_CONFERENCE) {
    return Object.assign({}, state, {
      ...state,
      data: action.payload,
    });
  } else if (action.type === SET_TEAM_DATA) {
    return Object.assign({}, state, {
      ...state,
      teamInfo: action.payload[0],
      latestRecruits: action.payload[1],
      latestTalentRating: action.payload[2],
      ppaAverages: action.payload[4],
      BCR: action.payload[5],
      yearRecord: action.payload[6],
    });
  } else if (action.type === SET_TEAM_SPRANK) {
    return Object.assign({}, state, {
      ...state,
      spRank: action.payload,
    });
  } else if (action.type === SET_CONFERENCE_SPRANK) {
    let modifiedSpRank = [];
    // teamReducer.spRank.forEach((rank, index) => {
    //   console.log(action.payload[index].dataSet);
    //   modifiedSpRank.push({
    //     ...rank,
    //     conference: action.payload[index].dataSet,
    //   });
    // });
    // console.log(modifiedSpRank);
    // return Object.assign({}, state, {
    //   ...state,
    //   spRank: modifiedSpRank,
    // });
  } else if (action.type === PRELOAD_APP_DATA) {
    console.log(action.payload.conferences);
    return Object.assign({}, state, {
      teamList: action.payload.teams,
      conferenceList: action.payload.conferences,
    });
  }
  return state;
}
