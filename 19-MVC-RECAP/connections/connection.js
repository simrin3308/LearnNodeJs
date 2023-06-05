const mongoose = require('mongoose')

const connectWithMongoDb = async (url) => {
    return mongoose.connect(url);
}

module.exports = { connectWithMongoDb }