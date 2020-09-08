import axios from "axios";
import { writeFileSync, existsSync, appendFileSync } from "fs";
import { teamData } from "./Gameid";
import { seasons } from "./Seasons";
const siteBaseUrl: string =
  "https://api.collegefootballdata.com/drives?seasonType=regular&year=";

export const getData = gameId => {
  axios
    .get(siteBaseUrl + gameId)
    .then(res => {
      //   console.log(res.data);
      // let tempData = {
      //   id: res.data[0].id,
      //   homeTeam: {},
      //   awayTeam: {}
      // };

      // res.data[0].teams.forEach(e => {
      //   if (e.homeAway == "home") {
      //     tempData.homeTeam = e;
      //   } else {
      //     tempData.awayTeam = e;
      //   }
      // });

      let response = JSON.stringify(res.data);

      if (existsSync("./plays.json")) {
        appendFileSync("./plays.json", response);
      } else {
        writeFileSync("./plays.json", response);
      }
    })
    .catch(err => {
      console.log(err);
      return;
    });
};

for (let i = 0; i < seasons.length; i++) {
  (function(i) {
    setTimeout(function() {
      getData(seasons[i]);
    }, 500 * i);
  })(i);
}
