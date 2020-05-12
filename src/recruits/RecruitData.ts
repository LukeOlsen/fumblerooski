import { teamRecruitBCR, BCRGroup } from "./RecruitInterfaces";

export default class RecruitFunctions {
  public static async calculateBCR(croots: Array<teamRecruitBCR>) {
    let finalResponse: Array<BCRGroup> = [];
    let BCGroup: BCRGroup = {
      name: "Blue Chip",
      value: 0,
    };
    let NBCGroup: BCRGroup = {
      name: "Non Blue Chip",
      value: 0,
    };
    croots.forEach((t) => {
      if (t.stars > 3) {
        BCGroup.value = BCGroup.value + 1;
      } else {
        NBCGroup.value = NBCGroup.value + 1;
      }
    });
    finalResponse.push(BCGroup);
    finalResponse.push(NBCGroup);
    return finalResponse;
  }
}
