var express = require("express");
var teamData = express.Router();
var teamQ = require("./TeamQueries");

teamData.get("/:team", async (req, res) => {
  let teamData = await teamQ(req.params.team);
  res.json(teamData);
});

module.exports = teamData;
