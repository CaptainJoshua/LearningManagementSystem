const mongoose = require('./db');

// create a schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
});
let userModel = mongoose.model('users', userSchema);
module.exports = mongoose.model("Users", studentSchema);