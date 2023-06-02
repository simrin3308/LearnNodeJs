// const http = require("http")
// const fs = require("fs")


// // const myServer = http.createServer((req, res) => {
// //     const log = `${Date.now()}: New Req Received`;
// //     fs.appendFile("log.txt", log, (err, data) => {
// //         res.end("hello from server")
// //     })
// // });


// // myServer.listen(8000, () => {
// //     console.log('server started');
// // })


// // // we can also check the path where the req came from
// // const myServer = http.createServer((req, res) => {
// //     const log = `${Date.now()}: ${req.url} New Req Received`;
// //     fs.appendFile("log.txt", log, (err, data) => {
// //         res.end("hello from server")
// //     })
// // });


// // we can also send different responses depending on the page
// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()}: ${req.url} New Req Received`;
//     fs.appendFile("log.txt", log, (err, data) => {
//         if(req.url === "/favicon.ico") return res.end()
//         switch (req.url) {
//             case '/': res.end("hello from Home")
//                 break;
//             case '/about': res.end("hello from about")
//                 break;
//             default: res.end("hello from 404")
//         }
//     })
// });


// myServer.listen(8000, () => {
//     console.log('server started');
// })

