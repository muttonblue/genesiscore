var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var path = require('path');
var sass = require('node-sass-middleware');
var cookieSession = require('cookie-session');
var expressSession = require('express-session');

module.exports = function() {
  var app = express();
  //verify NODE_EVN
  if(process.env.NODE_EVN === 'development') {
    app.use(morgan('dev'));
  }else {
    app.use(morgan('compression'));
  }

  app.use(expressSession({
    secret: 'sdfsdSDFD5sf4rt4egrt4drgsdFSD4e5',
    maxAge: Date.now() + (30 * 86400 * 1000),
    resave:false,
    saveUninitialized:true
  }));

  app.use(bodyParser.urlencoded({
    extended:true
  }));
  app.use(bodyParser.json());

  // set the view engine to ejs
  //  app.set('view engine', 'ejs');
  app.set('view engine', 'jade');
  app.set('views', './app/views');
  // app.set('views', path.join(__dirname, '../app/views'));

   var requireLogin = function(req, res, next) {
    if (req.session.userlogin) {
      next(); // allow the next route to run
    } else {
      res.redirect("/heraapp/login"); // or render a form, etc.
    }
  };

 // Automatically apply the `requireLogin` middleware to all
 app.all("/heraapp/pages/*", requireLogin, function(req, res, next) {
   console.log('>> userLogin: ' + req.session.userlogin);
   if(req.session.userlogin === 'abc@gmail.com'){
     res.redirect("/heraapp/home");
   }else {
      next();
   }
 });

 // routes starting with `/admin`
 app.all("/admin/*", requireLogin, function(req, res, next) {
   console.log('>> secret page: ');
   console.log('>> userLogin: ' + req.session.userlogin);
   if(req.session.userlogin === 'abc@gmail.com'){
     res.redirect("/heraapp/home");
   }else {
      next();
   }
 });
 // Routes
  require('../app/routes/index.routes')(app);
  require('../app/routes/home.routes')(app);
  require('../app/routes/sample.routes')(app);
  require('../app/routes/medicalRecord.routes')(app);
  require('../app/routes/user.routes')(app);
  require('../app/routes/admin.routes')(app);
  require('../app/routes/database.routes')(app);

  app.use(sass({
    src:'./sass',
    dest:'./public/css',
    outputStyle:'compressed',
    prefix:'/css',
    indentedSyntax: false, // sass:true, scss:false
    debug: true
  }));

  app.use(express.static('public'));
  return app;
};
