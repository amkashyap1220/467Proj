var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "blitz.cs.niu.edu",
  user: "student",
  password: "student",
  database: "csci467",
});

connection.connect();
const getAllParts = () => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM parts`, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAllParts,
  connection, // (optional) Exporting the connection object can also be useful in some cases
};