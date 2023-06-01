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


* This type of export is called default export
```js
module.exports = {
  addFn: add,
  subFn: sub,
};
```
Anonymous  Function
We can export by `export object`
```js
module.add = (a, b) => a+b;
module.sub = (a, b) => a-b;
```

* Node has some inBuild functions too.

```js
const math = require("./math");
```
```js
const math = require("math");
```
If we are looking locally, we need to add `./`.If we are looking in built in functions, we need to only write the name of it eg `fs` => file system