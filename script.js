const express = require('express');
const app = express();

// configure ejs setup
app.set('view engine','ejs');


// render instead of send to view in browser
// make views folder and index.ejs file(here write your html code,css, js)
app.get('/',(req,res)=>{
  res.render('index',{name:'BALRAM RAJBANSHI'})
})


app.get("/about", (req, res) => {
  res.render("about",{firstName:'BALRAM',lastName:'RAJBANSHI'});
});


app.listen(3000,()=>{
  console.log('App is running on port 3000');
  
})