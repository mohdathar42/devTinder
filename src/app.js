const express = require("express");
const app = express();

app.use(
  "/user",
  (req, res,next) => {
    console.log("Middleware 1");
    // res.send("Hello from Middleware 5");
    next();
  },
  (req, res, next) => {
    console.log("Middleware 2");
    next();
    // res.send("Hello from Middleware 1");
  },
  (req, res, next) => {
    console.log("Middleware 3");
    // res.send("Hello from Middleware 2");
    next();
  },
  (req, res, next) => {
    console.log("Middleware 4");
    // res.send("Hello from Middleware 2");
    next();
  },
  (req, res) => {
    console.log("Middleware 5");
    res.send("Hello from Middleware 5");
  }
);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
