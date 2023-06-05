const express = require("express");
const PORT = 8000;
const { connectWithMongoDb } = require('./connections/connection');
const userRouter = require("./routes/userRoute");
const app = express();


// connection with mongoose
connectWithMongoDb("mongodb://127.0.0.1:27017/dummyUsers").then(() => console.log("Mongoose Connected"))



// MiddleWares
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})
