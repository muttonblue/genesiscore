module.exports = function(app){
  var controller = require('../controllers/home.controller.js');
  app.get('/heraapp/home' , controller.render);

};
