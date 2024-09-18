const express = require("express");
const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.send("The server is working");
});

app.listen(port, () => {
  console.log("server is running on 8080");
});
