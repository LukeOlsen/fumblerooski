const mysql = require('mysql');

const sendTeams = (conference) => {
      const connection = mysql.createConnection({
          host     : process.env.DB_HOST,
          user     : process.env.DB_USER,
          password : process.env.DB_PASS,
          database : process.env.DB_NAME
        });
      
      connection.connect()

      const sql = `SELECT SchoolsFBS.school FROM fumblerooski_test.SchoolsFBS WHERE conference="${conference}"`
      
      connection.query(sql, function (error, results, fields) {
          if (error) throw error;
          console.log(results);
          return results
        });

}

exports.sendTeams = sendTeams