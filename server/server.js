'use strict';
//We declare all our dependencies
var express = require("express");
var path = require("path");
var config = require("./config/config");

//initialize our express app
const app = express();

//Web server
const server = require("http").Server(app)

const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "../src")));
//const root = path.join(path.resolve(__dirname,'../../target'));
//console.log(root);

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,'src/index.html'));
})

//set server connections


//listing to port 3000
app.listen(3000, function(){
    console.log(`Listening on port: ${ config.port }`);
});