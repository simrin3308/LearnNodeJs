# 1.

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

# 2. Modular programming => We split big project into small modules.

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

# 3. File Handling.

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

# 4.

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

# 5. Http

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

# 6. URL

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
const myUrl = url.parse(req.url);
const myUrl = url.parse(req.url, true); // url string => TRUE
```

```js
const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Received`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    if (myUrl.pathname === "/favicon.ico") return res.end();
    switch (myUrl.pathname) {
      case "/":
        res.end("hello from Home");
        break;
      case "/about":
        const userName = myUrl.query.myName;
        res.end(`hello from about ${userName}`);
        break;
      default:
        res.end("hello from 404");
    }
  });
});

myServer.listen(8000, () => {
  console.log("server started");
});
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

# 7. Http methods

7.1> http get => To get some data from the server. Whenever we search a url, browser creates a `get` request.

7.2> http POST => When we want to send data and mutate data from server. Eg forms, signIn etc.

```js
const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.method} New Req Received`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    if (myUrl.pathname === "/favicon.ico") return res.end();
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("hello from Home");
        break;
      case "/about":
        const userName = myUrl.query.myName;
        res.end(`hello from about ${userName}`);
      case "/signup":
        if (req.method === "GET") res.end(`hello from signup`);
        else if (req.method === "POST") {
          //send data to DB
          res.end(`Sucess`);
        }
        break;
      default:
        res.end("hello from 404");
    }
  });
});

myServer.listen(8000, () => {
  console.log("server started");
});
```

In homepage we don't need a `PUT` request. We only need a `GET` Request.

Above we created a signup page. Suppose we have a contact form. We need to use both `post` and `get` methods. we can handle them both as we handled above.

- Ways to write it =>

```js
const http = require("http");
const fs = require("fs");
const url = require("url");

const handleFunction = (req, res) => {
  const log = `${Date.now()}: ${req.method} New Req Received`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    if (myUrl.pathname === "/favicon.ico") return res.end();
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("hello from Home");
        break;
      case "/about":
        const userName = myUrl.query.myName;
        res.end(`hello from about ${userName}`);
      case "/signup":
        if (req.method === "GET") res.end(`hello from signup`);
        else if (req.method === "POST") {
          //send data to DB
          res.end(`Sucess`);
        }
        break;
      default:
        res.end("hello from 404");
    }
  });
};

const myServer = http.createServer((req, res) => handleFunction);

myServer.listen(8000, () => {
  console.log("server started");
});
```

# 08. Express

- In express js code becomes clean.
- we can automatically use the queries.
- Handling the routes becomes easy in express

```js
const express = require("express");
const http = require("http");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from home");
});
app.get("/about", (req, res) => {
  return res.send(`Hello from about ${req.query.name}`);
});

const myServer = http.createServer(app);

myServer.listen(8000, () => console.log("server started"));
```

In express we do not need to write the create server. It automatically handles it.

- Above code can be written as==>

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from home");
});
app.get("/about", (req, res) => {
  return res.send(`Hello from about ${req.query.name}`);
});

app.listen(8000, () => console.log("server started"));

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("server started"));
```

- Basic routing
  Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

app.METHOD(PATH, HANDLER)

- - Where:

- app is an instance of express.
- METHOD is an HTTP request method, in lowercase.
- PATH is a path on the server.
- HANDLER is the function executed when the route is matched.

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});
```

# 9. Versioning

Express current version is 4.18.2

- <ins>1st part (4)</ins> => Breaking Update > Major release > code made in Ver4 can or cannot work in ver5.

- <ins>2nd part (18) </ins> => Recommended Bug Security Fix > New feature >

- <ins>3rd part (2) </ins> => Minor fixes > optional update >

"^4.18.2" => `^` This is called carrot symbol. This means that the major update will remain fix. That is `4`. We can install other like 4.19.2 or etc. But 4 needs to be constant.

`^` => Install all minor fixes and recommended automatically. Don't change the major one.

`~` => Approximate matching Changes only approximate one. Only last one. (minor one)

# 10 Rest API

- Rest => Representational State Transfer.

RULES => {NOTE =>THESE ARE NOT OFFICIAL RULES}

1. Works on Server Client Architecture => Server is a different machine and client is a different. Both should not be independent on each other.

- Response can be anything => text, image, html, json etc.

- If client is Browser, it can easily handle the `html`. But if the client is mobile or something else(Alexa), it do not render `html`. So there causes the issue. But we can send `JSON` which can be used by any client but one step increases. Json is a raw data and needs to be worked on.

- JSON is key value pairs.

- Response send by `html` is called `SSR=>Server Side Rendering`. It is very fast and used by many big techs.

- If we know that our client will only be browser, we can use response `html`

- Sending response by `JSON` means `Client Side Rendering (CSR)` which is then used by react etc.

2. Always respect all HTTP requests.

- Don't misunderstood `post` with `patch`

# 11. Create Rest API

<!-- TASKS -->

Creation of rest api which supports JSON data

TASK 1.1 GET /api/users => List all users(json)

TASK 1.2 GET /users => List all users(HTML)

TASK 2. Get /api/users/1 => List details of user with ID 1

TASK 3. Get /api/users/2 => List details of user with ID 2

TASK 4. POST /users => Create new user

TASK 5. PATCH /user/1 => Edit the user at id 1

TASK 6.> DELETE /user/1 => Delete the user at ID 1

- Imports

```js
const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

// ROUTES

// task 1.1  /api/users
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// task 1.2  /users
app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

// task 2  /api/users/1  "/api/users/:id"
app.get("/api/users/:Id", (req, res) => {
  // first we will get the ID
  // this will be returned as string we need to convert this into number
  const Id = Number(req.params.Id);

  // then we will find that id in JSON data
  const user = users.find((user) => user.id === Id);
  res.json(user);
});

// task 3 done above

// Task 4
app.post("/api/users", (req, res) => {
  // todo
  return res.json({ status: "pending" });
});

// Task 5
app.patch("/api/users/:Id", (req, res) => {
  // todo
  const Id = Number(req.params.Id);
  return res.json({ status: "pending" });
});

// Task 6
app.delete("/api/users/:Id", (req, res) => {
  // todo
  const Id = Number(req.params.Id);
  return res.json({ status: "pending" });
});

app.listen(PORT, () => {
  console.log("Server Started");
});
```

- we can see these 4,5,6 are same routes so me can merge them

```js
// grouping
app
  .route("/api/users/:Id")
  .get((req, res) => {
    const ID = Number(req.params.Id);
    const user = users.find((user) => user.id === ID);
    return res.json(user);
  })
  .patch((req, res) => {
    const Id = Number(req.params.Id);
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    const Id = Number(req.params.Id);
    return res.json({ status: "pending" });
  });
```

- But post is not added in group.

- POST REQ

```js
// id do not comes from frontEnd
app.post("/api/users", (req, res) => {
  const body = req.body;
  // this body returns as undefined. So we need to use a middleware
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "pending" });
  });
});
```

Use `POSTMAN` for sending post requests.

```js
// middleware for body
app.use(express.urlencoded({ extended: false }));

app.post("/api/users", (req, res) => {
  const body = req.body;
  // this body returns as undefined. So we need to use a middleware. After using middleware output will be as object.
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "pending" });
  });
});

app.listen(PORT, () => {
  console.log("Server Started");
});
```

# 12. MiddleWares

Client > request(get on /users) > In server we have a route called '/user' > Express checks which block of code to run > then sends the result.

But with middleWares=>

- Client > request(get on /users) > Request goes to middleWare > middleWare checks everything > If everything is good > middleWare will send the request to the server. If not it sends req back to the client > In server we have a route called '/user' > Express checks which block of code to run > then sends the result.

- We can have different middleWares. Request can go through different middleWares. Every middleWare has different work.

- Next middleWares is commonly denoted by `next`.

- middleWares works line by line

* MiddleWares has three parameters => `req, res, next`

```js
////// middleWares
//This will run first
app.use(express.urlencoded({ extended: false }));

//This will run Second
// Custom middleWares
app.use((req, res, next) => {
  console.log("Hello from middleWares 1");
});
```

This will not end at last because we do not provide `res.end`

- This will Return the message.

```js
// Custom middleWares
app.use((req, res, next) => {
  console.log("Hello from middleWares 1");
  return res.json({ msg: "Hello from middleWares 1" });
});
```

- With next

```js
app.use((req, res, next) => {
  console.log("Hello from middleWares 1");
  next();
});
```

- Multiple middleWares

```js
app.use((req, res, next) => {
  console.log("Hello from middleWares 1");
  next();
});
app.use((req, res, next) => {
  console.log("Hello from middleWares 2");
  next();
});
```

- Data sending in middleWares
  myUserName initialized in middleWare 1 is available to 2

```js
app.use((req, res, next) => {
  console.log("Hello from middleWares 1");
  console.log(req);
  req.myUserName = "sam";
  next();
});
app.use((req, res, next) => {
  console.log("Hello from middleWares 2", req.myUserName);
  next();
});
// RESULT =>
// Server Started
// Hello from middleWares 1
// Hello from middleWares 2 sam
```



# 14. HTTP HEADERS

* Additional information with response and request are called headers.

* Headers carry the additional information.

* req headers => Path, scheme, language, cookies, user agent etc

* res headers => Date, Content type 

* There are many build in headers.

* We can create our own custom headers but name of custom headers start with `x`

```js
app.get("/api/users/", (req, res) => {
    res.setHeader('myName', "sam")
    return res.json(users)
})
```

* 