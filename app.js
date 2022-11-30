require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const session = require('express-session')


const app = express()
const PORT = process.env.PORT || 4000;
let path = require('path');

const ejs = require('ejs')
const bodyParser = require('body-parser')
    // const User = require('./models/User')
    // const userController = require('./controllers/authController')

// temporary database connection for testing purposes only (will be replaced with MongoDB Atlas)
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
    // mongoose.connect('mongodb+srv://joshua:joshua453@cluster0.dtrebuh.mongodb.net/LMS', {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         family: 4
    //     })
    //     .then(db => console.log('DB is connected'))
    //     .catch(err => console.log(err))

// init app & middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(session({
    secret: "my secret key",
    saveUninitialized: false,
    resave: false,
}))

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

app.use(express.static('uploads'))
    // folder for static files
app.use('/public', express.static('public'))

// set template engine
app.set('view engine', 'ejs')

// routes prefix
app.use('', require('./routes/routes'))

app.use(bodyParser.urlencoded({ extended: true }))


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})

// for admin login
// app.post('/login', (req, res) => {
//     const { username, password } = req.body
//     if (username === credentials.username && password === credentials.password) {
//         req.session.user = username
//         res.redirect('/admin')
//     } else {
//         res.redirect('/login')
//     }
// })

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('index');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});


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