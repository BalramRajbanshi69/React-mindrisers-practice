require("dotenv").config();
const express = require('express');
const app = express();
let PORT = process.env.PORT || 5000;
console.log(PORT);



app.get('/',(req,res)=>{
  res.send("Hello world");
})


app.get("/welcome", (req, res) => {
  // res.send("Welcome to Express Backend Development");
  // res.status(404).send("Not Found");
  res.sendStatus(404);
});

app.listen(PORT,()=>{
  console.log(`App is running on PORT ${PORT}`);
  
})