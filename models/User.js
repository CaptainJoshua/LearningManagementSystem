const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
    },
    birthDay: {
        type: String,
    },
    gender: {
        type: String,
    },
    mobile: {
        type: String,
    },
    studNum: {
        type: String,
    },
    grLvl: {
        type: String,
    },
    section: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
    },
    subjects: {
        type: Array,
    },
}, { timestamps: true });

const student = mongoose.model('student', userSchema);
module.exports = student;

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

// const User = mongoose.model('User', userSchema);
// module.exports = User;