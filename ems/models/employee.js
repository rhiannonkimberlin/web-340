var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let employeeSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
});

var employee = mongoose.model('employee', employeeSchema);

module.exports = employee;