require("dotenv").config();
const express = require('express');
const app = express();
let PORT = process.env.PORT || 5000;
console.log(PORT);

// this is middleware , is a function that executes before routing /, /profile,/contact
// req=> is client/user data sending to server
// res=> is server response to client/user
// next => must call next() to continue request flow
// if not used next(); request flow will stop and cannot run the routing process
app.use((req,res,next)=>{
  next();
})

app.get('/',(req,res)=>{
  res.send("Hello world");
})


app.get("/welcome", (req, res) => {
  res.send("Welcome to Express Backend Development");
  // res.status(404).send("Not Found");
  // res.sendStatus(404);
});

app.listen(PORT,()=>{
  console.log(`App is running on PORT ${PORT}`);
  
})