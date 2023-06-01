
const fs = require("fs")


// sync BLOCKING
// fs.writeFileSync("./test.txt","hello world")

// async NON BLOCKING
// fs.writeFile("./test.txt","hello world", (err) =>{})


// console.log("1");
// // sync BLOCKING
// const result = fs.readFileSync("./test.txt", "utf-8")
// console.log(result);
// console.log("2");



// console.log("1");
// // async NON BLOCKING
// fs.readFile("./test.txt", "utf-8", (err, result) => {
//     console.log(result);
// })

// console.log("2");



// OS

const os = require("os")

console.log(os.cpus().length);