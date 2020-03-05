var nodemailer = require("nodemailer");
module.exports = function mailer(data) {
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
    to: data,
    subject: "CHANGE THE PASSWORD",
    // html:
    //   "<h4><b>Reset Password</b></h4>" +
    //   '<button onClick="http://localhost:3000/verify ">reset</button>' +
    //   '<a href="http://localhost:5000/verify/' +
    //   data +
    //   '">reset</a>'
    text: "sucessfull change password "
  
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
