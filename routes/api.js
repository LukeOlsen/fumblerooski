var express = require("express");
var router = express.Router();
const conference = require("../models/Conference/ConferenceQueries");
const teamQ = require("../models/Teams/TeamQueries");

router.get("/conference/:conference", async (req, res) => {
  let confData;
  confData = await conference.sendConference(req.params.conference);
  res.json(confData);
});

router.get("/teamData/:team", async (req, res) => {
  let teamData = await teamQ(req.params.team);
  res.json(teamData);
});

module.exports = router;
