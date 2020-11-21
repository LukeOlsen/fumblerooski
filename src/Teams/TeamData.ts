import {
  ppaQueryResults,
  ppaApi,
  spDataPacket,
  basicTeamData,
} from "./TeamInterfaces";
import { Utilities } from "../tools/Utilities";

export default class TeamFunctions {
  public static async cleanPPA(
    data: Array<ppaQueryResults>
  ): Promise<ppaApi[]> {
    let result: Array<ppaApi> = [];
    let offense: ppaApi = {
      id: "offense",
      color: "hsl(337, 70%, 50%)",
      data: [],
    };
    data.forEach((a: ppaQueryResults) => {
      offense.data.push({
        id: `${a.opponent}`,
        Offense: a.offense_overall,
        Defense: a.defense_overall,
      });
    });
    result.push(offense);
    return result;
  }

  public static async cleanSpRank(data: object): Promise<spDataPacket[]> {
    let noData = false;
    const propNames: Array<string> = Object.keys(data);
    let cleanedData: Array<spDataPacket> = [];
    for (let i = 0; i < propNames.length; i++) {
      if (!data[propNames[i]]) {
        noData = true;
        break;
      }
      let tempStr: string = Utilities.Strings.CleanCamelString(propNames[i]);
      cleanedData.push({
        subject: tempStr,
        dataSet: data[propNames[i]],
      });
    }
    if (noData) {
      return [];
    } else {
      return cleanedData;
    }
  }

  public static groupByConference(data: Array<basicTeamData>): Object {
    let newObj: object = {};
    data.forEach((el) => {
      if (newObj[el.conference]) {
        newObj[el.conference].push(el.school);
      } else {
        newObj[el.conference] = [];
        newObj[el.conference].push(el.school);
      }
    });
    return newObj;
  }

  public static buildTeamsObject(data: Array<basicTeamData>): Object {
    let teamObj = {};
    data.forEach((el) => {
      teamObj[el.id] = el;
    });
    return teamObj;
  }
}
