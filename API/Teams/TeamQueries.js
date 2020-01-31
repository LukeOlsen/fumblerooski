const mysql = require("mysql");
const { promisify } = require("util");
const config = require("../../connections");

const sendTeams = async conference => {
  let connection = mysql.createConnection(config);
  let promisfydbconnection = promisify(connection.query).bind(connection);

  const sql = `SELECT SchoolsFBS.school FROM fumblerooski_test.SchoolsFBS WHERE conference="${conference}"`;
  return await promisfydbconnection(sql);
};

exports.sendTeams = sendTeams;
