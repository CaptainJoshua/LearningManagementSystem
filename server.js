// const express = require('express')
// const mongoose = require('mongoose')
// const morgan = require('morgan')
// const bodyParser = require('body-parser')
// const { MongoClient } = require('mongodb');

// const authRoute = require('./routes/auth')
// const uri = 'mongodb+srv://joshua:joshua453@cluster0.dtrebuh.mongodb.net/LMS';

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
// const db = mongoose.connection

// db.on('error', (error) => console.log(error))

// db.once('open', () => console.log('Database Connection Established'))

// const app = express()

// app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use('/uploads', express.static('uploads'))

// const PORT = process.env.PORT || 3000

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

// app.use('/api', authRoute)

// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/public/login.html');
// });

// app.get('/dashboard', (req, res) => {
//     res.sendFile(__dirname + '/user_dashboard/index.html');
// });
// The code above is the one I currently use

// const app = express()
// const { ObjectId } = require('mongodb')
// const { connectToDb, getDb } = require('./db')
// const bcrypt = require('bcrypt')

// app.use(express.json())

// const users = []

// app.get('/users', (req, res) => {
//     res.json(users)
// })

// app.post('/users', async(req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         const user = { name: req.body.name, password: hashedPassword }
//         users.push(user)
//         res.status(201).send()
//     } catch {
//         res.status(500).send()
//     }
// })

// app.post('/users/login', async(req, res) => {
//     const user = users.find(user => user.name = req.body.name)
//     if (user == null) {
//         return res.status(400).send('Cannot find user')
//     }
//     try {
//         if (await bcrypt.compare(req.body.password, user.password)) {
//             res.send('Success')
//         } else {
//             res.send('Not Allowed')
//         }
//     } catch {
//         res.status(500).send()
//     }
// })

// app.listen(3000)

// The code below is the one From the tutorial I'm following on youtube (Web Dev Simplified)

const express = require('express')
const app = express()
const { ROLE, users } = require('./data')
const projectRouter = require('./routes/projects')
const authRouter = require('./basicAuth')
const { authUser, authRole } = require('./basicAuth')

app.use(express.json())
app.use(setUser)
app.use('/projects', projectRouter)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/dashboard', authUser, (req, res) => {
    res.send('Dashboard Page')
})

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
    res.send('Admin Page')
})

function setUser(req, res, next) {
    const userId = req.body.userId
    if (userId) {
        req.user = users.find(user => user.id === userId)
    }
    next()
}

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})