const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./db')

// init app & middleware
const app = express()

// db connection
let db
connectToDb((err) => {
    if (!err) {
        app.listen(4000, () => {
            console.log('app listening on port 4000')
        })
        db = getDb()
    }
})

// routes
app.get('/LMS/students', (req, res) => {
    let lms = []

    db.collection('student')
        .find()
        .sort({ name: 1 })
        .forEach(book => lms.push(book))
        .then(() => {
            res.status(200).json(lms)
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the documents' })
        })
})



// routes
app.get('/students', (req, res) => {
    res.json({ msg: "welcome to the world" })
})

app.get('/students/:id', (req, res) => {
    // const id = req.params.id
    if (ObjectId.isValid(req.params.id)) {
        db.collection('student')
            .findOne({ _id: ObjectId(req.params.id) })
            .then(doc => {
                res.status(200).json(doc)
            })
            .catch(err => {
                res.status(500).json({ error: 'Could not fetch the document' })
            })
    } else {
        res.status(500).json({ error: 'Not a valid doc id' })
    }

})
console.log('test')
console.log('test')