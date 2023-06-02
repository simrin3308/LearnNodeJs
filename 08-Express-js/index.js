const express = require('express')
const http = require('http')
const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from home")
})
app.get("/about", (req, res) => {
    return res.send("Hello from about" + " hey " + req.query.name)
})

// const myServer = http.createServer(app)

// myServer.listen(8000, () => console.log("server started"))

app.listen(8000, () => console.log("server started"))