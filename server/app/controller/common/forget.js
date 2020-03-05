const mysqlconnections = require("../../../connect");
const mysql = require("mysql");
const express = require("express");
const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken');
// const config=require('../config/config')
const mailerFun = require("./otpemail");
const foremail=require('./email');
var app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());

var otpGenerator = require("otp-generator");

exports.verify = (req, res) => {
  console.log(req.params.id);
  mysqlconnections.query(
    "SELECT * FROM employee WHERE email= ?",
    [req.params.id],
    (err, rows, fields) => {
      if (rows.length > 0) {
        mysqlconnections.query(
          "UPDATE  `employee` SET status= '1' WHERE email=? ",
          [req.params.id],
          function(err, result) {
            if (!err) {
              res.send("Email verified");
            } else console.log(err);
          }
        );
      } else console.log(err);
    }
  );
};
////////////
exports.Forgate = (req, res) => {
  const emp = req.body;
  // const email=req.body.email;
  emp.otp = otpGenerator.generate(6, {
    digits: true,
    alphabets: false,
    upperCase: false,
    specialChars: false
  });
  console.log(emp);
  mysqlconnections.query(
    "SELECT * FROM employee WHERE email= ?",
    [emp.email],
    (err, rows, fields) => {
      if (rows.length > 0) {
        mailerFun(emp.email);
        mysqlconnections.query(
          "UPDATE `employee` SET `status`='1',`otp`=? WHERE email=?",
          [emp.otp, emp.email],
          function(err, result) {
            if (!err)
              // res.send("email verified")
              res.json({ msg: 1 });
            // console.log(err);
            else res.json({ msg: 0 });
          }
        );
      } else res.json({ msg: 0 });
    }
  );
};

exports.otp = (req, res) => {
  const emp = req.body;
  console.log(emp);

  mysqlconnections.query(
    "SELECT * FROM employee WHERE email= ? OR otp=?",
    [emp.email, emp.otp],
    (err, rows, fields) => {
      if (rows.length > 0) {
        mysqlconnections.query(
          "UPDATE `employee` SET `otp`=? WHERE email=?",
          [emp.null, emp.email],
          function(err, result) {
            if (!err)
              // res.send("email verified")
              res.json({ msg: 1 });
            // console.log(err);
            else res.json({ msg: 0 });
          }
        );
      } else res.json({ msg: 0 });
    }
  );
};

/////////////
exports.changepass = (req, res) => {
  var emp = req.body;
  // password=req.body.password;
  var password = emp.password;
  console.log(emp);
  if (emp.password == "1") {
    res.json({
      msg: 0
    });
  } else {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) console.log("success");
      bcrypt.hash(password, salt, function(err, hash) {
        if (err) console.log("sucss");
        const passwordhash = hash;
        console.log(passwordhash);
        mysqlconnections.query(
          "UPDATE `employee` SET password= ? WHERE email=?",
          [passwordhash, emp.email],
          function(err, result) {
            if (!err) {
              foremail(emp.email);
              res.json({ msg: 1 });
            } else res.json({ msg: 0 });
          }
        );
      });
    });
  }
};

            
       
            
                        
           
              
            
                        
            
















