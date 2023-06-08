const express = require('express');
const urlRouter = require('./routes/urlRouter');
const { connectMongooseDb } = require('./connection/connection');
const PORT = 8001;
const app = express();
const URL = require('./models/urlModel');



// connectionWithMongoDb
connectMongooseDb('mongodb://127.0.0.1:27017/urlShortener')
    .then(() => console.log("Mongoose Connected"))
    .catch((err) => console.log("Error"))


// MiddleWares
app.use(express.urlencoded({ extended: false }));


// Routes
app.use('/url', urlRouter)

// 
app.get('/:shortID', async (req, res) => {
    // get this id
    const shortId = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamps: Date.now()
            }
        }
    })
    res.redirect(entry.redirectUrl)
})




app.listen(PORT, () => {
    return console.log(`Server started at ${PORT}`);
})