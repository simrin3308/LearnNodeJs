const express = require("express")
const fs = require("fs")
const users = require("./MOCK_DATA.json")
const app = express()
const PORT = 8000;


// middleWares

app.use(express.urlencoded({ extended: false }))

// Custom middleWares
// app.use((req, res, next) => {
//     console.log('Hello from middleWares 1');
//     return res.json({ msg: "Hello from middleWares 1" })
// })

// app.use((req, res, next) => {
//     console.log('Hello from middleWares 1');
//    next()
// })
// app.use((req, res, next) => {
//     console.log('Hello from middleWares 2');
//    next()
// })


// data sending

app.use((req, res, next) => {
    fs.appendFile('log.txt', `\n${Date.now()}: ${req.path}`, (err, data) => {
        next();
    })
})



// ROUTES

app.get('/api/users', (req, res) => {
    return res.json(users)
})


app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    res.send(html)
})




app.route("/api/users/:Id")
    .get((req, res) => {
        const ID = Number(req.params.Id)
        const user = users.find((user) => user.id === ID)
        return res.json(user)
    })
    .patch((req, res) => {
        const Id = Number(req.params.Id);
        return res.json({ status: "pending" })
    }).delete((req, res) => {
        const Id = Number(req.params.Id);
        return res.json({ status: "pending" })
    })




app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "pending" })
    })

})

app.listen(PORT, () => {
    console.log("Server Started");
})