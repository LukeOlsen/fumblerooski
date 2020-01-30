require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const teams = require('./API/Teams/TeamQueries')



const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/conference/:conference', async (req, res) => {
  let teamData
  teamData = await teams.sendTeams(req.params.conference)
  res.json(teamData)
})

app.listen(port, () => console.log(`Listening on port ${port}`));