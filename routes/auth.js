const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

router.post('/register', authController.register)
router.post('/login', authController.login)


module.exports = router

// const { Student } = require('../models/student')

// router.post('/login', async(req, res) => {
//     const student = await Student.findOne({ username: req.body.username })
//     if (student == null) {
//         return res.status(400).send('Cannot find student')
//     }
//     try {
//         if (await bcrypt.compare(req.body.password, student.password)) {
//             res.send('Success')
//         } else {
//             res.send('Not Allowed')
//         }
//     } catch {
//         res.status(500).send()
//     }
// })


// module.exports = router