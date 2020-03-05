var multer = require("multer");

module.exports = function(app) {
  const forget = require("../../app/controller/common/forget");
  const loginc = require("../../app/controller/common/login.controller");
  const register = require("../../app/controller/common/register.controller");
  const common = require("../../app/controller/common/forget");
  let middleware = require("../../app/middleware/token.verify.middleware");

  var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      console.log(file.originalname);
      cb(null, "/public/assets/image");
    },
    filename: function(req, file, cb) {
      cb(null, image.file + "-" + Date.now());
    }
  });

  var upload = multer({ storage: storage });

  app.post("/login", loginc.login);

  app.post("/api/user", upload.single("file"), register.create);
  app.get("/api/users", register.findAll);
  app.get("/api/users/:id", register.findById);
  app.put("/api/userUpdate/:id", register.Update);
  app.delete("/api/users/:id", register.delete);

  app.get("/api/categary", register.categary);
  app.get("/api/Industray", register.Industray);
  app.post("/api/verify", forget.verify);
  app.get("/verify/:id", forget.verify);
  app.post("/Forgate/:id", forget.Forgate);
  app.post("/otp/:id", forget.otp);
  app.post("/changepass", forget.changepass);
};
