import axios from "axios";
import { writeFileSync, existsSync, appendFileSync } from "fs";
import { teamData } from "./GameId";
const siteBaseUrl: string = "";

export const getData = gameId => {
  axios
    .get(siteBaseUrl + gameId)
    .then(res => {
      let tempData = res.data.teams;

      tempData.gameId = gameId;

      let response = JSON.stringify(res.data.teams);

      if (existsSync("./fppa.json")) {
        appendFileSync("./fppa.json", response);
      } else {
        writeFileSync("./fppa.json", response);
      }
    })
    .catch(err => {
      console.log(err);
      return;
    });
};

for (let i = 0; i < teamData.length; i++) {
  (function(i) {
    setTimeout(function() {
      getData(teamData[i].id);
    }, 500 * i);
  })(i);
}
