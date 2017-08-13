var PAGE = 'pages/database'; 

exports.render = function(req, res) {
  res.render(PAGE, {
    title: "Mogodb"
  }); //jade
};

exports.getConnetion = function(req, res) {
  let app = req.app, result_func = {};
  app.get("users.findOne")((data) => {
    res.send( data );
  });
};

exports.find = function(req, res) {
  console.log("~ find ~");
};

exports.findAny = function(req, res) {
  console.log("~ findAny ~");
};

exports.add = function(req, res) {
  console.log("~ add ~");
};

exports.edit = function(req, res) {
  console.log("~ edit ~");
};

exports.delete = function(req, res) {
  console.log("~ delete ~");
};
