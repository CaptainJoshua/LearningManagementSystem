const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        if (err) {
            res.json({
                error: err
            })
        }
        let user = new User({
            // firstName: req.body.firstName,
            // lastName: req.body.lastName,
            // age: req.body.age,
            // birthDay: req.body.birthDay,
            // gender: req.body.gender,
            // mobile: req.body.mobile,
            // studNum: req.body.studNum,
            // grLvl: req.body.grLvl,
            // section: req.body.section,
            // username: req.body.username,
            // password: hashedPass,
            // role: req.body.role,
            // subjects: req.body.subjects,
            // name: req.body.name,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            studNum: req.body.studNum,
            // email: req.body.email,
            phone: req.body.phone,
            password: hashedPass,
        });
        user.save()
            .then(user => {
                res.json({
                    message: 'User added successfully!'
                })
            })
            .catch(error => {
                res.json({
                    message: 'An error occurred!'
                })
            })
    })
}

const login = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({ $or: [{ studNum: username }, { phone: username }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function(err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ firstName: user.firstName }, 'verySecretValue', { expiresIn: '1h' });
                        res.json({
                            message: 'Login successful!',
                            token
                        })
                    } else {
                        res.json({
                            message: 'Password does not matched!'
                        })
                    }
                })
            } else {
                res.json({
                    message: 'No user found!'
                })
            }
        })
}

module.exports = { register, login } // Exporting the register and login functions
    // Will come back to this later
    // Time for some rest for now :) (01:48 AM)