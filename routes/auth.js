const express = require('express')
const router = express.Router()

const { Student } = require('../models/student')

router.post('/login', async(req, res) => {
    const student = await Student.findOne({ username: req.body.username })
    if (student == null) {
        return res.status(400).send('Cannot find student')
    }
    try {
        if (await bcrypt.compare(req.body.password, student.password)) {
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
})


module.exports = router

// will work on this later on to make it work with the database and the front end of the application
// Time to sleep now and get some rest for tomorrow and the next day
// I will be back tomorrow to continue working on this project
// Good night and sweet dreams
// 10/10/2022   03:22 AM