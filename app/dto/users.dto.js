const MongoClient = require('mongodb').MongoClient;
const DATABASE_URL = 'mongodb://localhost/heraapp';
const CONLLECTION = "users";

exports.findOne = (callback) => {
  console.log("~ find ~");
  MongoClient.connect(DATABASE_URL, (err, database) => {
    if (err) return console.log(err)
    var conlection = database.collection(CONLLECTION).findOne({}, function(err, result) {
      if (err) throw err;
      console.log('result: ' + result);

      database.close();

      callback(result)
    });
  });
};
