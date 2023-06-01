
const fs = require("fs")


// fs.writeFileSync("./test.txt", "hello")


// fs.writeFile("./test.txt", "hello",(err)=>{})

// const result = fs.readFileSync("./Contact.txt", "utf-8")

// console.log(result);


// fs.readFile("./Contact.txt", "utf-8",(err, result) =>{
//     if(err){
//         console.log(err,"error");
//     }else{
//         console.log(result);
//     }
// })


// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./test.txt", `hey There/n`);

// copySync
// fs.cpSync("./test.txt", "./copy.txt")

// delete
// fs.unlinkSync("./copyy.txt")

// stats
// console.log(fs.statSync("./test.txt")); 

// console.log(fs.statSync("./test.txt").isFile()); 


// make directory
// fs.mkdirSync("docs")

fs.mkdirSync("doc/1/2", { recursive: true })