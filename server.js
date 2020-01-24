require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const teams = require('./queries/TeamQueries')

const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  });

connection.connect();
 
connection.query('SELECT SchoolsFBS.school FROM fumblerooski_test.SchoolsFBS WHERE id=2 ', function (error, results, fields) {
  if (error) throw error;
  console.log('The school is: ', results[0].school);
});
 

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
        );
    });

app.get('/teams/:conference', (req, res) => {
    let conference = req.params.conference;
    console.log(conference)
    const answer = teams.sendTeams(conference)
    console.log(answer)
    res.send(answer)
})
    
connection.end();
app.listen(port, () => console.log(`Listening on port ${port}`));