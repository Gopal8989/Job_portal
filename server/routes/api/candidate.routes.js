//  var multer = require('multer');

//  module.exports =function(app){

//      const forget = require('../../app/controller/common/forget');
//      const common = require('../../app/controller/common/login.controller');
//      const register = require('../../app/controller/common/register.controller');
//      // // const common = require('./../api/mail');
//      // let middleware = require('../../');

//      var storage = multer.diskStorage({
//        destination: function (req, file, cb) {
//          console.log(file.originalname);
//          cb(null, 'upload/')
//        },
//        filename: function (req, file, cb) {
//          cb(null, file.fieldname + '-' + Date.now())
//        }
//      })

//      var upload = multer({ storage: storage })

//      app.post('/api/user', upload.single('file'), register.create);
//      // app.post('/login',common.login);
//      app.get('/api/users',register.findAll);
//      app.get('/api/users/:id',register.findById);
//      // app.put('/api/userUpdate/:id',register.Update);
//      app.delete('/api/users/:id',register.delete);

//      // app.get('/api/categary',common.categary);
//      //  app.get('/api/Industray',common.Industray);
//      app.post('/api/verify',forget.verify);
//    app.get('/verify/:id',forget.verify);
//    app.post('/Forgate/:id',forget.Forgate);
//    app.post('/otp/:id',forget.otp);
//    app.post('/changepass',forget.changepass);
//  }
