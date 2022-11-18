// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     //     firstName: {
//     //         type: String,
//     //     },
//     //     lastName: {
//     //         type: String,
//     //     },
//     //     age: {
//     //         type: Number,
//     //     },
//     //     birthDay: {
//     //         type: String,
//     //     },
//     //     gender: {
//     //         type: String,
//     //     },
//     //     mobile: {
//     //         type: String,
//     //     },
//     //     studNum: {
//     //         type: String,
//     //     },
//     //     grLvl: {
//     //         type: String,
//     //     },
//     //     section: {
//     //         type: String,
//     //     },
//     //     username: {
//     //         type: String,
//     //     },
//     //     password: {
//     //         type: String,
//     //     },
//     //     role: {
//     //         type: String,
//     //     },
//     //     subjects: {
//     //         type: Array,
//     //     },
//     // }, { timestamps: true });

//     // const student = mongoose.model('student', userSchema);
//     // module.exports = student;

// the code below is the one I currently use
//     name: {
//         type: String,
//     },
//     email: {
//         type: String,
//     },
//     phone: {
//         type: String,
//     },
//     password: {
//         type: String,
//     },
// }, { timestamps: true });

// const User = mongoose.model('users', userSchema);
// module.exports = User;


// for tutorial purposes

const mongoose = require('mongoose');
// const uri =

const usersSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = new mongoose.model('User', usersSchema);

module.exports = User;