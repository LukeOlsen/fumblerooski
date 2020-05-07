import { ppaQueryResults, ppaApi } from "./TeamInterfaces";

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
        o: a.offense_overall,
        d: a.defense_overall,
      });
    });
    result.push(offense);
    return result;
  }
}
