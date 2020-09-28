import { ppaQueryResults, ppaApi, spDataPacket } from "./TeamInterfaces";
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
    const propNames: Array<string> = Object.keys(data);
    let cleanedData: Array<spDataPacket> = [];
    propNames.forEach((el) => {
      let tempStr: string = Utilities.Strings.CleanCamelString(el);
      cleanedData.push({
        subject: tempStr,
        dataSet: data[el],
      });
    });
    return cleanedData;
  }
}
