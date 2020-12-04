const http = require('http');
const fs = require('fs');
const { text } = require('body-parser');
const express = require("express");
const { response } = require("express");
const server = express();

server.use(express.static(__dirname + '/public'));

server.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html");

})
server.listen(3000,() => {
    console.log("The server is runing on port 3000 prodect by MT")

});



