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

const { MongoClient } = require('mongodb');
let dbConnection;
exports.connectToDb = async(cb) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017/LMS');
        dbConnection = client.db();
        return cb();
    } catch (error) {
        console.log(error);
        return cb(error);
    }
};

exports.getDb = () => dbConnection;