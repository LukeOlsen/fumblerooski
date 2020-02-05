require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const conference = require("./API/Conference/ConferenceQueries");
const teamQ = require("./API/Teams/TeamQueries");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/conference/:conference", async (req, res) => {
  let confData;
  confData = await conference.sendConference(req.params.conference);
  res.json(confData);
});

app.get("/api/teamData/:team", async (req, res) => {
  let teamData = await teamQ(req.params.team);
  res.json(teamData);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
