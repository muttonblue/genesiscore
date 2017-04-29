var PAGE = 'pages/medical-record';

exports.render = function(req, res) {
  res.render(PAGE , {
    title : "ระบบงานห้องเวชทะเบียน"
  }); //res.render
}; //render
