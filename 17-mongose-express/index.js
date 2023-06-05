const express = require("express")
const fs = require("fs")

const app = express()
const PORT = 8000;
const mongoose = require('mongoose')


// Step 1 => Connection

mongoose
    .connect('mongodb://127.0.0.1:27017/dummyUsers')
    .then(() => console.log("Mongoose connected"))
    .catch((err) => console.log('error', err))


// Step 2 => Create schema

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
    },
},
    {
        timestamps: true
    })


// step 3 => Create Modal

const User = mongoose.model("user", userSchema)
// This will be in collection


// MiddleWares
app.use(express.urlencoded({ extended: false }));




app.use((req, res, next) => {
    console.log("MiddleWare 1");
    fs.appendFile('log.txt', `\n${Date.now()} ${req.method} ${req.path}`, (err, data) => {
        next()
    })
})






// Routes
app.get("/", (req, res) => {
    return res.end('Hello from Home')
})

// all users with mongoose


app.get("/api/users/", async (req, res) => {
    const allDbUsers = await User.find({})
    return res.json(allDbUsers)

    // res.setHeader('myName', "sam")
    // return res.json(users)
})

// users with id IN mongoose
app.get("/api/users/:ID", async (req, res) => {

    const user = await User.findById(req.params.ID)
    if (!user) return res.status(404).json({ msg: "No User Found" })
    return res.json(user)
})

// post with mongoose
app.post("/api/users/", async (req, res) => {
    const body = req.body;

    if (
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender
    ) {
        return res.status(400).json({ msg: "All field are required" });
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender
    })
    console.log(result);

    return res.status(201).json({ msg: "Sucess" })


})



app.delete("/api/users/:ID", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.ID)
    const allDbUsers = await User.find({})
    return res.json(allDbUsers)
})

app.patch("/api/users/:ID", async (req, res) => {
    const body = req.body;
    const user = await User.findByIdAndUpdate(req.params.ID, {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender
    })
    const allDbUsers = await User.find({})

    return res.json(allDbUsers)



    // const upd = users.findIndex((user => user.id === ID))
    // users[upd] = { id: ID, ...req.body };
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //     return res.json(users)
    // })
})


app.listen(PORT, () => {
    console.log(`server Started at port ${PORT}`);
})

