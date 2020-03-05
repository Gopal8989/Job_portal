const mysqlconnections = require("../../../connect");
const mysql = require("mysql");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../../config/db.config");

// const bodyparser = require('body-parser');

exports.login = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  console.log(password);

  mysqlconnections.query(
    "SELECT * FROM employee WHERE email = ?",
    [email],
    function(error, results, fields) {
      if (error) {
        res.json({
          status: false,
          message: "there are some error with query"
        });
      } else if (results.length > 0) {
        //   mailerFun(emp.email);
        console.log(results);
        bcrypt.compare(password, results[0].password, function(err, result) {
          var token = jwt.sign({ email: results[0].email }, config.SECRET_KEY, {
            expiresIn: 86400 // expires in 24 hours
          });
          console.log(token);

          if (!result) {
            res.json({
              status: false,
              message: "Email and password does not match "
            });
          } else {
            res.json({
              status: true,
              message: "Successfully Login",
              token: token,
              data: results
            });
          }
        });
      } else {
        res.json({
          status: false,
          message: "Email does not exits"
          //results
        });
      }
    }
  );
};
