const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
var mysqlconnections = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Employee",
  multipleStatements: true
});

mysqlconnections.connect(err => {
  if (!err) console.log("DB connect sucess");
  else
    console.log(
      "DB connection failed /n error :" + JSON.stringify(err, undefined, 2)
    );
});

module.exports = mysqlconnections;
