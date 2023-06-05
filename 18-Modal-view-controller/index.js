const express = require("express")

const app = express()
const PORT = 8000;
const mongoose = require('mongoose')
const { connectMongoDb } = require("./connection/connection");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middleware");



// Step 1 => Connection
connectMongoDb("mongodb://127.0.0.1:27017/dummyUsers").then(() => {
    console.log("Mongoose Connected");
})



// This will be in collection


// MiddleWares
app.use(express.urlencoded({ extended: false }));




app.use(logReqRes("log.txt"))






// Routes
app.use('/api/user', userRouter)

app.listen(PORT, () => {
    console.log(`server Started at port ${PORT}`);
})

