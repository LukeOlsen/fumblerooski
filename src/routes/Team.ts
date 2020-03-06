import * as express from "express";

export const team = express.Router();

team.get("/:team", async (req, res, next) => {
  res.send("teams hit");
});

// var express = require("express");
// var teamData = express.Router();
// var teamQ = require("./TeamQueries");

// teamData.get("/:team", async (req, res) => {
//   let teamData = await teamQ(req.params.team);
//   res.json(teamData);
// });
