module.exports = function(app){

  var controller = require('../controllers/user.controller.js');
  app.get('/heraapp/login' , controller.getlogin);
  app.post('/heraapp/login' , controller.login);
  app.post('/heraapp/logout' , controller.logout);
  app.post('/heraapp/getuserlogin' , controller.getUserLogin);
};
