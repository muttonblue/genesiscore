module.exports = function(app){
  var actions = require('../controllers/patient.controller.js');
  app.get('/patient/index' , actions.index_page);
  app.post('/patient/search' , actions.search);
};
