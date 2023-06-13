const express = require("express");
const urlRouter = require("./routes/urlRouter");
const userRouter = require("./routes/userRouter");
const staticRoute = require("./routes/staticRouter");
const { connectMongooseDb } = require("./connection/connection");
const PORT = 4999;
const app = express();
const URL = require("./models/urlModel");
const path = require("path");

const cookieParser = require('cookie-parser');
const { restrictToLoginUserOnly, checkAuth } = require("./middleWare/authMiddleware");



// connectionWithMongoDb
connectMongooseDb("mongodb://127.0.0.1:27017/urlShortener")
    .then(() => console.log("Mongoose Connected"))
    .catch((err) => console.log("Error"));

// set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// MiddleWares
app.use(express.json()) //to support json data
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// Routes
app.use("/url", restrictToLoginUserOnly, urlRouter);
app.use("/user", userRouter);
app.use("/", checkAuth, staticRoute);


app.get("/url/:shortID", async (req, res) => {
    // get this id
    const shortId = req.params.shortID;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamps: Date.now(),
                },
            },
        }
    );
    console.log(entry);
    res.redirect(entry?.redirectUrl);
});

app.listen(PORT, () => {
    return console.log(`Server started at ${PORT}`);
});
