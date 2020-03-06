import * as express from "express";

export const conference = express.Router();

conference.get("/:conference", async (req, res, next) => {
  res.send("big time conference");
});

// var express = require("express");
// var conference = express.Router();
// var conferenceQ = require("./ConferenceQueries");

// conference.get("/:conference", async (req, res) => {
//   let confData;
//   confData = await conferenceQ.sendConference(req.params.conference);
//   res.json(confData);
// });
