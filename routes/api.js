var express = require("express");
var router = express.Router();
const conference = require("../Conference/ConferenceRoute");
const teamQ = require("../Teams/TeamQueries");

router.use("/conference", conference);

router.get("/teamData/:team", async (req, res) => {
  let teamData = await teamQ(req.params.team);
  res.json(teamData);
});

module.exports = router;
