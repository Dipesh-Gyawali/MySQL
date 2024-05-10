const mysql = require("mysql");

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "lms2",
});

con.connect((err) => {
  if (err) {
    console.warn("not connect");
  } else {
    console.warn("connected!!!");
  }
});

con.query("select * from student", (err, result) => {
  if (err) {
    console.warn("some error");
  } else {
    console.warn(result, "dd");
  }
});
