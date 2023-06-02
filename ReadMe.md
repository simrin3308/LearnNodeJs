1.

- To run a file => {Node index} in terminal

- npm init for initializing. It will create the new file package.Json. This file will have all the dependencies. We can create our own scripts.
  eg

```js
{
  "name": "1-hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

In scripts we can add our own scripts. Suppose "hello"

```js
{
  "name": "1-hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "hello": "node index"
  },
  "author": "",
  "license": "ISC"
}

```

if we do `node run hello` it will run the index file

By this way we can create our own dependencies and packages. We need `npm init` for the creation of `package.json` file.

2. Modular programming => We split big project into small modules.

Math related work in

- Require Function

Suppose we want to do modular programming. We need to keep the all math related work in `math.js` but we need the function in `index.js`. For that we need `REQUIRE` and we need to export that function in `math.js`. Require is only in node js, not in js.

```js
const math = require("./math");
```

In `math.js`, we need to export

```js
module.exports = "sam";
```

```js //index.js
const math = require("./math");

console.log(math); //sam
```

Now to add `add` function, we need to add

```js
module.exports = add;
```

```js
const math = require("./math");

console.log(math(3, 8)); //11
```

- Suppose we have to export 2 functions like add and sub, we can make use of objects.\

```js
module.exports = {
  add,
  sub,
};
```

- We can change the name of it.
  This type of export is called default export

```js
module.exports = {
  addFn: add,
  subFn: sub,
};
```

- console.log(math);
  { addFn: [Function: add], subFn: [Function: sub] }

- To call only one function =>

```js
console.log(math.addFn(2, 4));
```

- Destructuring =>

```js
const { addFn, sub } = require("./math");
console.log(addFn(2, 4));
```

- This type of export is called default export

```js
module.exports = {
  addFn: add,
  subFn: sub,
};
```

Anonymous Function
We can export by `export object`

```js
module.add = (a, b) => a + b;
module.sub = (a, b) => a - b;
```

- Node has some inBuild functions too.

```js
const math = require("./math");
```

```js
const math = require("math");
```

If we are looking locally, we need to add `./`.If we are looking in built in functions, we need to only write the name of it eg `fs` => file system

3. File Handling.

For file handling, we need `const fs = require('fs')`. This is in build for nodejs.
This enables interacting will file system.

This will create a file named `test.text` with "hello" in it.

```js
const fs = require("fs");
fs.writeFileSync("./test.txt", "hello");
```

- To create files
  we can use with with 2 ways

```js
// sync
fs.writeFileSync("./test.txt", "hello");

// async
fs.writeFile("./test.txt", "hello", (err) => {});
```

These both will overwrite if used on one file twice.

- To read files.

with readFileSync

```js
const result = fs.readFileSync("./Contact.txt", "utf-8");

console.log(result);
```

with readFile

```js
fs.readFile("./Contact.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err, "error");
  } else {
    console.log(result);
  }
});
```

readFileSync returns result automatically while in readFile, we need to give a callback that catches error and save result. readFile do not return anything. It always expects callback.

- Append
  writeFileSync or writeFile used to create a file and add data in it ass we did above. But it overwrites the data if used on same file. In that case we can use `append`

```js
fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

fs.appendFileSync("./test.txt", `hey There/n`);
```

- To copy file

```js
fs.cpSync("./test.txt", "./copy.txt");
```

- To delete a file

```js
fs.unlinkSync("./copyy.txt");
```

- To check stats

```js
console.log(fs.statSync("./test.txt"));
```

- To check if its a file

```js
console.log(fs.statSync("./test.txt").isFile()); //true
```

- To create dir

```js
fs.mkdirSync("docs");
```

- To create dir folder in folder

```js
fs.mkdirSync("doc/1/2", { recursive: true });
```

4.

client > request > request goes to server > req comes to server > Request comes in event queue. > Then req goes to event loop. work of event loop is to check weather there is a new request or not > This request can be solved by 2 ways.

4.1> Blocking operation => Request goes to thread pool > Thread pool is a pool of threads with are basically workers > First workers are checked, if available it processes the request and send response. > If workers are full, task will be completed after the workers get free. i mean thread.

4.2> Non Blocking operation => Accepts the request > process it and sends response.

image.png

-

```js
// sync BLOCKING
const result = fs.readFileSync("./test.txt", "utf-8");
console.log(result);

// async NON BLOCKING
fs.readFile("./test.txt", (result) => {
  console.log(result);
});
```

-

```js
console.log("1");
// sync BLOCKING
const result = fs.readFileSync("./test.txt", "utf-8");
console.log(result);
console.log("2");
```

RESULT=> will be
1
papa - 9419401111
2

-

```js
console.log("1");
// sync BLOCKING
const result = fs.readFileSync("./test.txt", "utf-8");
console.log(result);
console.log("2");
```

RESULT=> will be
1
papa - 9419401111
2
It blocks
It returns

-

```js
console.log("1");
// async NON BLOCKING
fs.readFile("./test.txt", "utf-8", (err, result) => {
  console.log(result);
});

console.log("2");
console.log("3");
```

Result =>
1
2
3
papa - 9419401111

It is non blocking.
It do not returns. We need to give a callback Functions

Thread Pool workers depend on the cores. If server or pc has 6 cores, it will have 6 workers.

To check the size of cores.

```js
// OS

const os = require("os");

console.log(os.cpus().length); //12
```

We should always write a code that is non blocking.
![image](https://github.com/simrin3308/LearnNodeJs/assets/110960043/3f5327d1-5bcf-4e1d-a2eb-babaca4768e3)

5. Http

- We have a build it `http`

```js
const http = require("http");
const myServer = http.createServer((req, res) => {
  console.log("new req received");
  res.end("hello from server");
});
```

This will create a server. `createServer` has a request listener function which has 2 parameters. `req` and `res`. Req gives the information about the user or client and res is used to send the responses.

- we need to run the server on a specific port. For that we need to use `listen`.

```js
myServer.listen(8000, () => {
  console.log("server started");
});
```

The callback function checks whether our .server is running good or not,

- Server that maintains a log

```js
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New Req Received`;
  fs.appendFile("log.txt", log, (err, data) => {
    res.end("hello from server");
  });
});

myServer.listen(8000, () => {
  console.log("server started");
});
```

- we can also check the path where the req came from.

```js
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Received`;
  fs.appendFile("log.txt", log, (err, data) => {
    res.end("hello from server");
  });
});
```

<!-- Result -->

1685685435697: /about New Req Received
1685685435735: /about New Req Received
1685685435772: /favicon.ico New Req Received

6. URL

https://www.sam.com/

https:// => Protocol => Hypertext transfer protocol secure

www.sam.com => Domain => User friendly name.

/ => path

- Query parameters
www.sam.com/about?userId=1&a=2


* We have already created server. Now we will add more functionality. We have a npm package called `url`. We will install it. This package will give us all the details about the url

```js
npm i url
```

```js
const myUrl = url.parse(req.url)
const myUrl = url.parse(req.url, true)// url string => TRUE
```

```js
const http = require("http")
const fs = require("fs")
const url = require("url")


const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received`;
    const myUrl = url.parse(req.url, true)
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        if (myUrl.pathname === "/favicon.ico") return res.end()
        switch (myUrl.pathname) {
            case '/': res.end("hello from Home")
                break;
            case '/about':
                const userName = myUrl.query.myName;
                res.end(`hello from about ${userName}`)
                break;
            default: res.end("hello from 404")
        }
    })
});


myServer.listen(8000, () => {
    console.log('server started');
})
```
url => http://localhost:8000/about?q=papa
RESULT 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?q=papa',
  query: [Object: null prototype] { q: 'papa' },
  pathname: '/about',
  path: '/about?q=papa',
  href: '/about?q=papa'
}

