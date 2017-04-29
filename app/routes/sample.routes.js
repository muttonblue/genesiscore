module.exports = function(app){
  var controller = require('../controllers/sample.controller.js');
  app.get('/pages/sample/index' , controller.render);

  app.post('/pages/sample/listPatient' , controller.listPatient);
  app.post('/pages/sample/listDoctor' , controller.listDoctor);
  app.post('/pages/sample/listUser' , controller.listUser);
  app.post('/pages/sample/getPatient' , controller.getPatient);
  app.post('/pages/sample/getDoctor' , controller.getDoctor);
  app.post('/pages/sample/getUser' , controller.getUser);

};
