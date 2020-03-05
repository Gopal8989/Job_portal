var nodemailer = require("nodemailer");
module.exports = function mailerFun(data) {
  var transporter = nodemailer.createTransport({
    //  host: 'gmail',
    //  port: 587,
    //  secure: false,
    service: "gmail",
    auth: {
      user: "corporate19.gopalregar@gmail.com",
      pass: "gopal8989*"
    }
  });

  var mailOptions = {
    from: "corporate19.gopalregar@gmail.com",
    to: data.email,
    subject: "VERIFY THE EMAIL",
    text: "sucessfull account register",
  };
  console.log(mailOptions);

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log("errr", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  return {
    msg: "success"
  };
};