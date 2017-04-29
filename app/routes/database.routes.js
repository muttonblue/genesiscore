module.exports = function(app){
  var controller = require('../controllers/database.controller.js');
  app.get('/heraapp/pages/database/index' , controller.render);

  app.post('/heraapp/pages/database/find' , controller.find);
  app.post('/heraapp/pages/database/add' , controller.add);
  app.post('/heraapp/pages/database/edit' , controller.edit);
  app.post('/heraapp/pages/database/delete' , controller.delete);

};
