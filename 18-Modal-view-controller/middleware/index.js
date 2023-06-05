const fs = require("fs")

function logReqRes(fileName) {
    return (req, res, next) => {

        console.log("MiddleWare 1");
        fs.appendFile('log.txt', `\n${Date.now()} ${req.method} ${req.path}`, (err, data) => {
            next()
        })
    }
}

module.exports = { logReqRes }