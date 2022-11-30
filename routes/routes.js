const express = require('express');
const router = express.Router();
const User = require('../models/users');
const multer = require('multer');
const fs = require('fs');

// all of this lines of code are for adding, updating, and deleting user from admin page

// image upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
    }
});

let upload = multer({ storage: storage }).single('image');

// Insert an user into database route
router.post('/add', (req, res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        dob: req.body.dob,
        role: req.body.role,
        gender: req.body.gender,
        username: req.body.username,
        password: req.body.password,
        // not required fields below this line except created_at
        grlvl: req.body.grlvl,
        section: req.body.section,
        studnum: req.body.studnum,
        mobile: req.body.mobile,
        subjects: req.body.subjects,
        //Save data without image
        image: req.file ? req.file.filename : null,
        // image: req.file.image,
    });
    user.save((err) => {
        if (err) {
            res.json({
                message: err.message,
                type: 'danger'
            });
        } else {
            req.session.message = {
                type: 'success',
                intro: 'Success!',
                message: 'User successfully added.'
            };
            res.redirect('/admin');
        }
    });
});

// Get to admin dashboard route
router.get('/admin', (req, res) => {
    User.find().exec((err, users) => {
        if (err) {
            res.json({
                message: err.message,
                type: 'danger'
            });
        } else {
            res.render('adminDashboard', {
                title: 'Admin Dashboard',
                users: users
            });
        }
    });
});

// route to add new user
router.get('/add', (req, res) => {
    res.render('add_users', { title: 'Add New User' });
});

// edit an user route
router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) {
            res.redirect('/admin');
        } else {
            if (user == null) {
                res.redirect('/admin');
            } else {
                res.render('edit_users', { title: 'Update User', user: user });
            }
        }
    });
});

// update an user route
router.post('/update/:id', (req, res) => {
    let id = req.params.id;
    let new_image = '';

    if (req.file) {
        new_image = req.file.filename;
        try {
            fs.unlinkSync('./uploads/' + req.body.old_image);
        } catch {
            console.log('Error deleting old image');
        }
    } else {
        new_image = req.body.old_image;
    }
    User.findByIdAndUpdate(id, {
        name: req.body.name,
        age: req.body.age,
        dob: req.body.dob,
        role: req.body.role,
        gender: req.body.gender,
        username: req.body.username,
        password: req.body.password,
        // not required fields below this line except created_at
        grlvl: req.body.grlvl,
        section: req.body.section,
        studnum: req.body.studnum,
        mobile: req.body.mobile,
        subjects: req.body.subjects,
        image: new_image,
    }, (err, result) => {
        if (err) {
            res.json({ message: err.message, type: 'danger' });
        } else {
            req.session.message = {
                type: 'success',
                message: 'User successfully updated.'
            };
            res.redirect('/admin');
        }
    });
});

// delete an user route
router.get('/delete/:id', (req, res) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, result) => {
        if (result.image != '') {
            try {
                fs.unlinkSync('./uploads/' + result.image);
            } catch {
                console.log(err);
            }
        }
        if (err) {
            res.json({ message: err.message, type: 'danger' });
        } else {
            req.session.message = {
                type: 'success',
                message: 'User successfully deleted.'
            };
            res.redirect('/admin');
        }
    });
});

module.exports = router;