process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var app = express();
var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log(">>>>> Start Service listening at http://%s:%s", host, port)
})
module.exports=app;
