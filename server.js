require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const teams = require("./API/Teams/ConferenceQueries");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/conference/:conference", async (req, res) => {
  let confData;
  confData = await teams.sendConference(req.params.conference);
  res.json(confData);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
