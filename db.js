// const { MongoClient } = require('mongodb');

// let dbConnection

// module.exports = {
//     connectToDb: (cb) => {
//         MongoClient.connect('mongodb://localhost:27017/LMS')
//             .then((client) => {
//                 dbConnection = client.db()
//             })
//             .catch(err => {
//                 console.log(err)
//                 return cb(err)
//             })
//     },
//     getDb: () => dbConnection
// }
//! The code above has some issues.

const { MongoClient } = require('mongodb');
let dbConnection;
let uri = 'mongodb+srv://joshua:joshua453@cluster0.dtrebuh.mongodb.net/?retryWrites=true&w=majority'
exports.connectToDb = async(cb) => {
    try {
        const client = await MongoClient.connect(uri);
        dbConnection = client.db();
        return cb();
    } catch (error) {
        console.log(error);
        return cb(error);
    }
};

exports.getDb = () => dbConnection;

// Connect Node js Express to MongoDB using Mongoose ODM (Object Document Mapper)
// let mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/LMS', { useNewUrlParser: true }); //, useUnifiedTopology: true });
// let conn = mongoose.connection;
// conn.on('connected', () => {
//     console.log('Database connected successfully');
// });
// conn.on('disconnected', () => {
//     console.log('Database disconnected successfully');
// });
// conn.on('error', console.error.bind(console, 'connection error:'));
// module.exports = conn;