module.exports = function(app){
    const dto = require('../dto/users.dto');

    app.set("users.findOne" , dto.findOne);

};


//
// exports.findOne = (err, result) => {
//
//  return result_func;
// };
