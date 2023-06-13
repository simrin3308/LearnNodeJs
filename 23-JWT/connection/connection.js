const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const connectMongooseDb = (url) =>{
    return  mongoose.connect(url)
}

module.exports = {connectMongooseDb}