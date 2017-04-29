module.exports = function(app){
  var controller = require('../controllers/admin.controller.js');
  app.get('/admin/user' , controller.render);
};
