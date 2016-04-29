
module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var studentSchema = new Schema({
        username: String,
        phone_numbers: String,
        college_name: String,
        address: String
    });

    var student = mongoose.model('student', studentSchema);
    return student;
};