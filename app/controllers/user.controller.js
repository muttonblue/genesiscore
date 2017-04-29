var PAGE = 'login';
exports.getlogin = function(req, res) {
  res.render(PAGE , {
    title : "Logged in as ",
    isLoggedIn : false,
    message : "xxxxx How are things. xxxxxxx"
  }); //jade
}; //getUserLogin

exports.login = function(req, res){
  var body = req.body,
  email = body.email,
  password = body.password,
  remember = body.rememver;

console.log('>> login');
  console.log(body);
  console.log('Email: ' + email);
  console.log('Password: ' + password);
  console.log('remember: ' + remember);

 req.session.userlogin = email;

  res.redirect("/heraapp/home"); // or render a form, etc.
  // res.render('pages/home' , {
  //   title : "Logged in as " + email,
  //   isLoggedIn : true,
  //   message : "xxxxx How are things. xxxxxxx"
  // }); //jade
}; //login

exports.logout = function(req, res) {
  req.session = null;

  res.render(PAGE , {
    title : "Jade Tx",
    isLoggedIn : false,
    message : "See you agein later."
  }); //jade
}; //logout

exports.getUserLogin = function(req, res) {
    console.log('---- getUserLogin: ');
    res.send(req.session.userlogin);

}; //getUserLogin
