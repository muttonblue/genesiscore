var PAGE = 'pages/sample';

//TODO: app.get('/pages/sample/index' , controller.render);
exports.render = function(req, res) {
  res.render(PAGE , {
    title : "Sample Page",
    message : "How are things."
  }); //render
}; //render

//TODO: app.post('/pages/sample/listPatient' , controller.listPatient);
exports.listPatient = function(req, res) {
  res.send(req.session.userlogin);
};

//TODO: app.post('/pages/sample/listDoctor' , controller.listDoctor);
exports.listDoctor = function(req, res) {
  res.send(req.session.userlogin);
};

//TODO: app.post('/pages/sample/listUser' , controller.listUser);
exports.listUser = function(req, res) {
  res.send(req.session.userlogin);
};

//TODO: app.post('/pages/sample/getPatient' , controller.getPatient);
exports.getPatient = function(req, res) {
  res.send(req.session.userlogin);
};

//TODO: app.post('/pages/sample/getDoctor' , controller.getDoctor);
exports.getDoctor = function(req, res) {
  res.send(req.session.userlogin);
};

//TODO: app.post('/pages/sample/getPatient' , controller.getUser);
exports.getUser = function(req, res) {
  res.send(req.session.userlogin);
};
