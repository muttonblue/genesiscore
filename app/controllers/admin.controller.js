var PAGE = 'pages/user';
exports.render = function(req, res) {
  res.render(PAGE , {
    title : "Administator Page",
    message : "xxxxx How are things. xxxxxxx"
  }); //jade
}; //login
