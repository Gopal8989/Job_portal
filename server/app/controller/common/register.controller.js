const mysqlconnections = require("../../../connect");
const mysql = require("mysql");
const express = require("express");
const bcrypt = require("bcryptjs");

const mailer = require("./verifyemail");
var app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());

exports.create = (req, res) => {
  let emp = req.body;
  console.log(emp);
  const name = req.body.name;
  const email = req.body.email;
  var password = req.body.password;
  var mobile = req.body.mobile;

  let errors = [];

  //Check required fields
  if (!name || !email || !password || !mobile) {
    errors.push({ msg: "Please fill in all the fields" });
    res.send({ message: "Please fill in all the fields" });
  }

  if (errors.length > 0) {
  } else {
    if (email) {
      mysqlconnections.query(
        "SELECT * FROM employee WHERE email= ? OR mobile=?",
        [emp.Email, emp.mobile],
        // mysqlconnections.query('SELECT * FROM employee WHERE email = ?', [email],
        (error, results, fields) => {
          if (results.length > 0) {
            res.json({
              msg: 1,
              // res.send('Email exists');
              // res.json(  {
              success: false,
              message: "Email 0R Phone no already exist",
              data: {}
            });
          } else {
            res.json({
              msg: 1,
              // mailer(emp.email);
              // res.json(  {
              success: true,
              message: "successfully authenticated",
              data: {}
              
            });

            bcrypt.genSalt(10, function(err, salt) {
              if (err) return next(err);
              bcrypt.hash(password, salt, function(err, hash) {
                if (err) return next(err);
                const passwordhash = hash;
                console.log(password);
                mysqlconnections.query(
                  "INSERT INTO `employee`(`name`,`last`,`email`,`password`,`mobile`,`Industry`,`categary`,`file`,`role`,`fullname`,`status`) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                  [
                    emp.name,
                    emp.last,
                    emp.email,
                    passwordhash,
                    emp.mobile,
                    emp.Industry,
                    emp.categary,
                    emp.file,
                    emp.role,
                    emp.fullname,
                    "0"
                  ],
                  function(err, result) {
                    if (err) {
                      console.log(err);
                    } else {
                      mailer(emp.email);
                      console.log(result);
                    }
                  }
                );
              });
            });
          }
        }
      );
    } else {
      res.send("Enter Email");
    }
  }
};
exports.findAll = (req, res) => {
  mysqlconnections.query("SELECT * FROM employee", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
};

exports.findById = (req, res) => {
  mysqlconnections.query(
    "SELECT * FROM employee WHERE id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
};

exports.delete = (req, res) => {
  mysqlconnections.query(
    "DELETE FROM employee WHERE id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send("delete success");
      else console.log(err);
    }
  );
};

exports.Update = (req, res) => {
  mysqlconnections.query(
    "UPDATE `employee` SET `name`=?,`last`=?,`email`=?,`password`=?,`mobile`=? WHERE `id`=?",
    [
      req.body.name,
      req.body.last,
      req.body.email,
      req.body.password,
      req.body.mobile,
      req.params.id
    ],
    function(err, result, fields) {
      if (!err) res.send(result.affectedRows + "row updated");
      else console.log(err);
    }
  );
};

exports.categary = (req, res) => {
  mysqlconnections.query("SELECT * FROM categary", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
};

exports.categary = (req, res) => {
  mysqlconnections.query("SELECT * FROM categary", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
};

exports.Industray = (req, res) => {
  mysqlconnections.query("SELECT * FROM Industray", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
};
