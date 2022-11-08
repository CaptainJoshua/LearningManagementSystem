const express = require('express')
const router = express.Router()

const { Student } = require('../models/student')

router.post('/login', async(req, res) => {
    const student = await Student.findOne({ email: req.body.email })
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

// time to get some sleep and try again tomorrow