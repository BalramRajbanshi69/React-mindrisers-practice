require("dotenv").config();
const express = require('express');
// const { chats } = require("./data/data");
const app = express();
const dbConnect = require('./db/db');
const logger = require("./middleware/logger");
dbConnect();


//environment variable and port setup
let PORT = process.env.PORT || 8000;
console.log(PORT);


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))


//Routes
app.use('/api/posts',require('./routes/posts'))
app.use('/api/auth',require('./routes/Auth'))


//middleware
app.use(logger)

// this is middleware , is a function that executes before routing /, /profile,/contact
// req=> is client/user data sending to server
// res=> is server response to client/user
// next => must call next() to continue request flow
// if not used next(); request flow will stop and cannot run the routing process
// app.use((req,res,next)=>{
//   next();
// })

// app.get('/',(req,res)=>{
//   res.status(200).send("Hello world");
// })


// app.get("/profile", (req, res) => {
//   res.send("Welcome to Express Backend Development");
//   // res.status(404).send("Not Found");
//   // res.sendStatus(404);
// });


//dynamic routing
// app.get('/profile/balram',(req,res)=>{
//   res.send('Welcome balram')
// })

// app.get("/profile/:username", (req, res) => {
//   res.send(`Welcome ${req.params.username}`);
// });

// app.get('/chats',(req,res)=>{
//   res.json(chats);
// })
  
  
// app.get("/chats/:id", (req, res) => {
//   const singleChat = chats.find((chat)=>chat._id === req.params.id)
//   console.log(req.params.id);
//   res.json(singleChat)
//   // res.json(req.params.id)
// });


  //start server
app.listen(PORT,()=>{
  console.log(`App is running on PORT ${PORT}`); 
})



