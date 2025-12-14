const express = require("express");
const app = express();
const port = 3000;

const middleware = [mylogger, exlogger];

function mylogger(req, res, next) {
  console.log("My Logger Middleware");
  next();
}

function exlogger(req, res, next) {
  console.log("External Logger Middleware");
}

app.get("/home", middleware, (req, res) => {
  console.log("Data received");
  res.json({ message: "Data received" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
