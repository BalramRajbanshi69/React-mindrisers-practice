require('dotenv').config();
const express = require("express");
const app = express();
let PORT = process.env.PORT || 5000;
console.log('Final port is',PORT);


app.get("/", (req, res) => {
  res.send("Hello world ! Welcome to express world");
});

app.get("/welcome", (req, res) => {
  res.send("Welcome Express on backend development");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
