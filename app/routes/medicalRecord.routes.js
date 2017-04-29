module.exports = function(app){
  var controller = require('../controllers/medicalRecord.controller.js');
  app.get('/heraapp/pages/medical-record/index' , controller.render);

};
