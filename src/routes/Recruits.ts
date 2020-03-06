import * as express from "express";

export const recruit = express.Router();

recruit.get("/:team/:year", async (req, res, next) => {
  res.send("recruit hit");
});

// var express = require("express");
// var recruit = express.Router();
// var recruitQ = require("./RecruitQueries");

// recruit.get("/:team/:year", async (req, res) => {
//   let recruitData = await recruitQ(req.params.team, req.params.year);
//   res.json(recruitData);
// });
