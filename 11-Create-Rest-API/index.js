const express = require("express")
const fs = require("fs")
const users = require("./MOCK_DATA.json")
const app = express()
const PORT = 8000;


// ROUTES

// task 1.1  /api/users
app.get('/api/users', (req, res) => {
    return res.json(users)
})

// task 1.2  /users
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    res.send(html)
})


// // task 2  /api/users/1  "/api/users/:id"
// app.get('/api/users/:Id', (req, res) => {
//     // first we will get the ID
//     // this will be returned as string we need to convert this into number
//     const Id = Number(req.params.Id);

//     // then we will find that id in JSON data
//     const user = users.find((user) => user.id === Id)
//     res.json(user);
// })


// // Task 4
// app.post("/api/users", (req, res) => {
//     // todo
//     return res.json({ status: "pending" })
// })

// // Task 5
// app.patch("/api/users/:Id", (req, res) => {
//     // todo
//     const Id = Number(req.params.Id);
//     return res.json({ status: "pending" })
// })

// // Task 6
// app.delete("/api/users/:Id", (req, res) => {
//     // todo
//     const Id = Number(req.params.Id);
//     return res.json({ status: "pending" })
// })

// we can see these 4,5,6 are same routes so me can merge them

// middleware for body
app.use(express.urlencoded({ extended: false }))

// grouping
app.route("/api/users/:Id")
    .get((req, res) => {
        return res.json({ status: "pending" })
    })
    .patch((req, res) => {
        const Id = Number(req.params.Id);
        return res.json({ status: "pending" })
    }).delete((req, res) => {
        const Id = Number(req.params.Id);
        return res.json({ status: "pending" })
    })

// app.post("/api/users", (req, res) => {
//     const body = req.body;
//     console.log('body', body);
//     return res.json({ status: "pending" })
// })

// id do not comes from frontEnd
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