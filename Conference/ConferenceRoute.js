var express = require("express");
var conference = express.Router();
var conferenceQ = require("./ConferenceQueries");

conference.get("/:conference", async (req, res) => {
  let confData;
  confData = await conferenceQ.sendConference(req.params.conference);
  res.json(confData);
});

module.exports = conference;
