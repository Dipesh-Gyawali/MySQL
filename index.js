const express = require("express");
const con = require("./config");
const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
  con.query("select * from student", (err, result) => {
    if (err) {
      resp.send("error in api");
    } else {
      resp.send(result);
    }
  });
});

app.post("/", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO student SET ?", data, (error, results, fields) => {
    if (error) throw error;
    resp.send(results);
  });
});

app.put("/:roll", (req, resp) => {
  const data = [
    req.body.firstname,
    req.body.lastname,
    req.body.username,
    req.body.roll,
    req.params.roll,
  ];
  con.query(
    "UPDATE student SET firstname = ?, lastname = ?, username = ?, roll = ? WHERE roll = ?",
    data,
    (error, results, fields) => {
      if (error) throw error;
      resp.send(results);
    }
  );
});

app.delete("/:roll", (req, resp) => {
  con.query(
    "DELETE FROM student WHERE roll=" + req.params.roll,
    (error, results) => {
      if (error) throw error;
      resp.send(results);
    }
  );
});
app.listen(5173);
