const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/User')
const PORT = 5000
const userController = require('./controllers/authController')

mongoose.connect('mongodb+srv://joshua:joshua453@cluster0.dtrebuh.mongodb.net/LMS', {
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
    res.redirect('index');
});

// need to add a route for the dashboard
// app.post('/dashboard', (req, res) => {
//     res.render('dashboard');
// });
// need to add a route for the user info
// need to add a route for the announcement
// need to add a route for the notification
// need to add a route for the calendar

// ****PORTS REQUEST ARE HERE**** //
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username: username }, (err, foundResults) => {
        if (err) {
            console.log(err);
            res.render('index');
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