var PAGE = 'pages/database';
exports.render = function(req, res) {
  res.render(PAGE, {
    title: "Mogodb"
  }); //jade
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
