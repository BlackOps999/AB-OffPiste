const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const cors = require("cors");

//middleware
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

console.log(path.join(__dirname, 'build'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
  
// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen((process.env.PORT || 8080), () => {console.log("server has started on port 8080")});