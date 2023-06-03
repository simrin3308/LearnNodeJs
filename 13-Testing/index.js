const express = require("express")
const fs = require("fs")

const app = express()
const PORT = 4444;
const users = require('./MOCK_DATA.json')




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

app.get("/api/users/", (req, res) => {
    return res.json(users)
})

app.get("/api/users/:ID", (req, res) => {
    const ID = Number(req.params.ID)
    const user = users.find((user) => user.id === ID)
    return res.json(user)
})

// post
app.post("/api/users/", (req, res) => {
    const body = req.body;
    users.push({ id: users.length + 1, ...body })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "added" });
    })
})

app.delete("/api/users/:ID", (req, res) => {
    const ID = Number(req.params.ID)
    const newUsers = users.filter((user) => user.id !== ID)
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(newUsers), (err, data) => {
        return res.json(newUsers)
    })
})

app.patch("/api/users/:ID", (req, res) => {
    const ID = Number(req.params.ID)
    const upd = users.findIndex((user => user.id === ID))
    users[upd] = { id: ID, ...req.body };
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json(users)
    })
})


app.listen(PORT, () => {
    console.log("server Started");
})

