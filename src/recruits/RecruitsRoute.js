var express = require("express");
var recruit = express.Router();
var recruitQ = require("./RecruitQueries");

recruit.get("/:team/:year", async (req, res) => {
  let recruitData = await recruitQ(req.params.team, req.params.year);
  res.json(recruitData);
});

module.exports = recruit;
