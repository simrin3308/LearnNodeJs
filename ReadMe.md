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

- Additional information with response and request are called headers.

- Headers carry the additional information.

- req headers => Path, scheme, language, cookies, user agent etc

- res headers => Date, Content type

- There are many build in headers.

- We can create our own custom headers but name of custom headers start with `x`

```js
app.get("/api/users/", (req, res) => {
  res.setHeader("myName", "sam");
  return res.json(users);
});
```

# 15. Status Code

- Status Code means whether a http request is completed or not.

- We can set the status codes.

1. 100-199 => Information Res

-

2. 200-299 => Successful Res

200=> ok
201=> created
202=> accepted
203=> Non Authoritative information
204=> No content
205=> Reset content

3. 300-399 => Redirection Res
4. 400-499 => Client Error Res

400=> Bad request or not given full information
401=> Unauthorized {no Login}
402=> Payment required
403=> Forbidden {You are logIn But u are not authorized to perform certain function.}
404=> Not Found

5. 500-599 => Server Error Res

500=> Internal server error
501=> Not implemented
502=> Service unavailable

- We can set status code by this =>

```js
// Set Status Code
app.post("/api/users/", (req, res) => {
  const body = req.body;
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "added" });
  });
});
```

# 16. MongoDB

- Non sql{Structured query language} documented based database

- Non sql works on document and sql works on tables.

- Based on BSON format

- Strong support for aggregation pipelines.

- Best for node applications

- Architecture of MONGODB
  we have collections and collections have documents.

- Useful Commands in MongoDB:

1. MongoDB - Create Database
   use csCorner

2. show dbs If you want to check your databases list, use the command

Your created database is not present in list. To display database, you need to insert at least one document into it

3. MongoDB - Drop Database
   db.dropDatabase()

4. MongoDB - Create Collection
   db.createCollection(name)
   db.createCollection("students")

5. MongoDB-Create Document.
   db.students.insert({"rollNo":1,"name":"sunita"})

If the collection doesn't exist in the database, then MongoDB will create this collection and then insert a document into it.

6. MongoDB -Show Collection
   show collections

7. MongoDB - Drop Collection
   db.students.drop()

8. MongoDB - Query Document
   db.students.find()

9. To display the results in a formatted way, you can use pretty method.
   db.mycol.find().pretty()

10. use <db_name>

11. show collections

12. db.col.find()

- db.users.find() => This gives us the document which we have created.

13. db.col.insert() => We can create the Entries.

# 17. Connect MongoDB with Express and do CRUD

1. Connect Mongoose

```js
// Step 1 => Connection

mongoose
  .connect("mongodb://127.0.0.1:27017/dummyUsers")
  .then(() => console.log("Mongoose connected"))
  .catch((err) => console.log("error", err));
```

2. In mongoose we create a schema.

```js
// Step 2 => Create schema

const userSchema = new mongoose.Schema({
  firstName: {
    type: string,
    required: true,
  },
  lastName: {
    type: string,
  },
  email: {
    type: string,
    required: true,
    unique: true,
  },
  gender: {
    type: string,
  },
});
```

In schema we define the structure.

structure is =>

{
id: 1,
fName:sam,
lName:singh
}

3. Then we create a Models using schema.

```js
// step 3 => Create Modal

const User = mongoose.model("user", userSchema);
```

4. Using models we do CRUD operations

<!-- Get All Users -->

```js
app.get("/api/users/", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});
```

<!-- users with id IN mongoose -->

```js
app.get("/api/users/:ID", async (req, res) => {
  const user = await User.findById(req.params.ID);
  if (!user) return res.status(404).json({ msg: "No User Found" });
  return res.json(user);
});
```

<!-- POST -->

```js
app.post("/api/users/", async (req, res) => {
  const body = req.body;

  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender
  ) {
    return res.status(400).json({ msg: "All field are required" });
  }

  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
  });
  console.log(result);

  return res.status(201).json({ msg: "Sucess" });
});
```

<!-- Patch -->

```js
app.patch("/api/users/:ID", async (req, res) => {
  const body = req.body;
  const user = await User.findByIdAndUpdate(req.params.ID, {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
  });
  const allDbUsers = await User.find({});

  return res.json(allDbUsers);
});
```

<!-- Delete -->

```js
app.delete("/api/users/:ID", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.ID);
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});
```

# 18. Modern View Controller {MVC}

- MVC is make up of three components. Model, View, Controller

- controller manipulate the model and model updates the view.
  => CONTROLLER => MODELS => VIEWS

1. We need 4 folders. => models, routers, views, controllers.

- In MODELS => schema, models and export function. {step2, step3}

- In routers => We will give all the routers. We need to use router at the place of app. At last we will export it.

```js
const router = express.Router();
// Routes
module.exports = router;
```

- We can remove the path from the router file. In the index file, we need to import this router and use it with the path and the router name

```js
// IMPORT
const userRouter = require("./routes/user");
// USE
app.use("/api/user/", userRouter);
```

2. Create `config.js` file for the connection of monoDb.

```js
const { model } = require("mongoose");

const router = express.Router();

const connectMongoDb = async (url) => {
  return mongoose.connect(url);
};

module.exports = {
  connectMongoDb,
};
```

```js in index.js main file
// Step 1 => Connection
connectMongoDb("mongodb://127.0.0.1:27017/dummyUsers");
```

3. All the routers have the handler functions which are called controllers. These controllers needs to be in other file called controllers.

```js in router/user.js
const router = express.Router();

router.get("/", handleGetAllUsers);
```

we create this handle function in `controller/index.js

```js
const User = require("../models/user");

const handleGetAllUsers = async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
};
module.exports = { handleGetAllUsers };
```

Note=> It is `module.exports`, not `module.export`.

# 19. Create MVC from scratch with steps.

1. const express, PORT, app.  
   `index.js`

2. Listen to the app

```js
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
```

3. Start the server and check if it console log's ``Server started at 8000`

4. Import middleware

```js
// MiddleWares
app.use(express.urlencoded({ extended: false }));
```

5. mongoose => models, routers, views, controllers.

- 5.1> Models requires schema

```js models/userModels.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
});

module.exports = Users = mongoose.model("Users", userSchema);
```

- 5.2>

```js connections/connection
const mongoose = require("mongoose");

const connectWithMongoDb = async (url) => {
  return mongoose.connect(url);
};

module.exports = { connectWithMongoDb };
```

- 5.3> Routes
  we can create different routes.

```js router/userRoutes.js
const express = require("express");
const User = require("../models/userModels");
const { handleGetAllUsers } = require("../controller/controller");
const router = express.Router();

// showAllUsers
router.get("/", handleGetAllUsers);

module.exports = router;
```

- 5.4> Routes

```js controllers/controller.js
const Users = require("../models/userModels");

const handleGetAllUsers = async (req, res) => {
  const allDbUsers = await Users.find({});
  return res.json(allDbUsers);
};

module.exports = { handleGetAllUsers };
```

6. connections

```js index.js
const { connectWithMongoDb } = require("./connections/connection");

connectWithMongoDb("mongodb://127.0.0.1:27017/dummyUsers").then(() =>
  console.log("Mongoose Connected")
);
```

7. Import middleware

```js
// MiddleWares
app.use(express.urlencoded({ extended: false }));
```

# 20. Url Shortener

POST/URL
GET/URL/:ID
Get/URL/analytics/:ID

1. npm init => package.json will be created and npm i express mongoose nodemorn shortid
2. const Port and Listen to the app

```js
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
```

3. Start the server and check if it console log's `Server started at 8000`

4. Import middleware

```js
// MiddleWares
app.use(express.json()); //to support json data or to parse the incoming data from body
app.use(express.urlencoded({ extended: false }));
```

5. mongoose => models, routers, views, controllers.

- 5.1> Models requires schema

```js models/urlModel.js
const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamps: {
          value: 1,
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const URL = mongoose.model("url", urlSchema);
module.exports = URL;
```

- 5.2>

```js connections/connection
const mongoose = require("mongoose");

const connectWithMongoDb = async (url) => {
  return mongoose.connect(url);
};

module.exports = { connectWithMongoDb };
```

- 5.3> Routes

- 5.3.1> Provide urlRouter . index file.

```js index.js
app.use("/url", urlRouter);
```

- 5.3.2> in urlRouter file, create the route.

```js urlRouter.js
const express = require("express");
const { handleGenerateShortUrl } = require("../controllers/urlController");
const router = express.Router();

router.post("/", handleGenerateShortUrl);
```

- 5.3.3> In urlController.js, give the functions of the routers. We can also import the data from DB as we import the `URL` below.

```js urlRouter.js
const express = require("express");
const { handleGenerateShortUrl } = require("../controllers/urlController");
const router = express.Router();

router.post("/", handleGenerateShortUrl);
```

```js urlController.js
const shortid = require("shortid");
const URL = require("../models/urlModel");

const handleGenerateShortUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "Url is required" });
  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortID });
};
```

- 5.3.4> Similarly we will create the routes and handlers of other route also.

```js urlRouter.js
const express = require("express");
const {
  handleGenerateShortUrl,
  handleGetAnalytics,
} = require("../controllers/urlController");
const router = express.Router();

router.post("/", handleGenerateShortUrl);
router.get("/analytics/:shortID", handleGetAnalytics);

module.exports = router;
```

```js urlController.js
// fetch data from database > return the clicks and analytics
const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shortID;
  const result = await URL.findOne({ shortId });
  console.log(result);
  return res.json({
    TotalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};
module.exports = { handleGenerateShortUrl, handleGetAnalytics };
```

- 5.3.5> Route=> `/url/:id` => This is redirect url

fetch data from database > update or increment > redirect the user

```js index.js
app.get("/url/:shortID", async (req, res) => {
  // get this id
  const shortId = req.params.shortID;

  // fetch data from database
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      // update or increment
      $push: {
        visitHistory: {
          timestamps: Date.now(), // we have given this as we wrote in urlModels schema
        },
      },
    }
  );
  // redirect the user
  res.redirect(entry.redirectUrl);
});
```

<!-- Also follow the ejs steps -->

# 21. EJS => Template engine

`https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application`

<!-- VIEWS folder work will start from here -->

6. Set view engine to ejs
   npm i ejs

```js
app.set("view engine", "ejs");
```

7. import path and set the views path

```js
const path = require("path");
app.set("views", path.resolve("./views"));
```

8. Create a static router. All the front end pages come in static router.

```js router/staticRouter.js
const express = require("express");
const URL = require("../models/urlModel");
const router = express.Router();

router.get("/", async (req, res) => {
  //homepage
  // we need to display users on homepage.
  const allUrls = await URL.find({});
  return res.render("home", { urls: allUrls });
});

module.exports = router;
```

9. Use static router in index

```js index.js
app.use("/", staticRoute);
```

8. Use app.render
   In views we need to create a file named `home.ejs`
   Ejs is a html file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=
    , initial-scale=1.0"
    />
    <title>Document</title>
    <style>
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
    </style>
  </head>

  <body>
    <h1>Url Shortener</h1>
    <% if (locals.id) { %>
    <!-- Locals is actually data coming from backend-->
    <p>URL Generated: http://localhost:4999/url/<%= id %></p>
    <% } %>
    <div>
      <!-- We need to give method that is POST and action is the path where we need to post it. Here we have POST on `/url`. 
      
      Check urlRouter.js. Name we need to set which we have used earlier. eg body.url 
      
      This is a FORM data which we cant use directly. We need a middleware express.urlencoded which is used above
      -->
      <form method="POST" action="/url">
        <label>Enter your original url</label>
        <!-- name property is very important because this name is going to be passed in backend -->
        <input type="text" name="url" placeholder="https://example.com" />
        <button type="submit">Generate</button>
        <!-- 
          When we click on the submit button, /POST will run or handleGenerateShortUrl will run
          const handleGenerateShortUrl = async  (req, res) => {
          const body = req.body;
          if (!body.url) return res.status(400).json({ error: "Url is required" })
          const shortID = shortid()
          await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
    });
          return res.render("home", { id: shortID })
    // return res.json({ id: shortID })
}

Here we need to do SSR. so we need to render the data. We also need to pass the id. This id will be used to render the id on the frontend. Check html body where we check if id is coming. We can use this id by locals.id
         -->
      </form>
    </div>
    <div>
      <% if (locals.urls) { %>
      <!-- This urls comes from the homepage of static router.  If we have urls in db, we need to display them in tables. -->
      <table>
        <thead>
          <th>S. No</th>
          <th>Short Id</th>
          <th>Redirect</th>
          <th>Clicks</th>
        </thead>
        <tbody>
          <% urls.forEach((url, index)=> { %>
          <!-- For each also returns index which we used to display the S NO. urls have all the data which we can use in the front end. Ths urls is actually all the data from the database -->
          <tr>
            <td><%= index + 1 %></td>
            <td><%= url.shortId %></td>
            <td><%= url.redirectUrl %></td>
            <td><%= url.visitHistory.length %></td>
          </tr>
          <% }) %>
        </tbody>
      </table>
      <% } %>
    </div>
  </body>
</html>
```

```js index.js
app.get("/url/test", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home");
});
```

9. Use app.render and sending data

```js index.js
// passing variables
app.get("/url/test", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});
```

10. Using variables in ejs file.

```js
<body>
    Hello from servers
    <ul>
    <% urls.forEach(url => { %>
        <l1><%= url.shortId %></l1>
    <% }) %>
    </ul>
</body>
```
