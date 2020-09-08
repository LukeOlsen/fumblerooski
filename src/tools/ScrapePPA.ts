import axios from "axios";
import { writeFileSync, existsSync, appendFileSync } from "fs";
import { teamData } from "./Gameid";
import { seasons } from "./Seasons";
const siteBaseUrl: string = "https://api.collegefootballdata.com/lines?year=";

export const getData = (gameId) => {
  axios
    .get(siteBaseUrl + gameId)
    .then((res) => {
      console.log(res.data);

      for (var i = 0; i < res.data.length; i++) {
        res.data[i].lines.forEach((el) => {
          if (el.provider == "consensus") {
            res.data[i].betLine = el;
          }
        });

        if (i == res.data.length - 1) {
          let response = JSON.stringify(res.data);

          if (existsSync("./lines.json")) {
            appendFileSync("./lines.json", response);
          } else {
            writeFileSync("./lines.json", response);
          }
        }
      }
    })
    .catch((err) => {
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
