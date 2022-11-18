const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/User')
const PORT = 5000
const userController = require('./controllers/authController')

mongoose.connect('mongodb://localhost:27017/usersDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))

// init app & middleware
const app = express()

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('index');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.get('/logout', (req, res) => {
    res.render('index');
});

// ****PORTS REQUEST ARE HERE**** //
app.post('/dashboard', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username: username }, (err, foundResults) => {
        if (err) {
            console.log(err);
        } else {
            if (foundResults.password === password) {
                // res.send('Successfully logged in!');
                res.render('dashboard', { username: `${username}` });

            } else {
                res.send('Incorrect username or Password!');
            }
        }
    })
});

// app.get('/logout', userController.userLogout, (req, res) => {

// })


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// // routes
// app.get('/LMS/students', (req, res) => {
//     let lms = []

//     db.collection('student')
//         .find()
//         .sort({ name: 1 })
//         .forEach(book => lms.push(book))
//         .then(() => {
//             res.status(200).json(lms)
//         })
//         .catch(() => {
//             res.status(500).json({ error: 'Could not fetch the documents' })
//         })
// })