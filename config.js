const mysql = require("mysql");
const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "lms2",
});

con.connect((err) => {
  if (err) {
    console.warn("error in connection");
  }
});

module.exports = con;
