const express = require('express')
const router = express.Router()

const credentials = {
    username: 'admin',
    password: 'admin123'
}

// login user
router.post('/login', (req, res) => {
    const { username, password } = req.body
    if (username === credentials.username && password === credentials.password) {
        req.session.user = username
        res.redirect('/admin')
    } else {
        res.redirect('/login')
    }
})

// route for dashboard
app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.render('dashboard', { username: req.session.user })
    } else {
        res.send('Unauthorized User')
    }
})

// route for logout
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err)
            return res.redirect('/dashboard')
        }
        res.clearCookie(SESS_NAME)
        res.render('/')
    })
})