const express = require("express");
const app = express();
const port = 3000;

app.get("/home", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  console.log("Data received");
  res.json({ message: "Data received" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
