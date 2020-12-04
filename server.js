const http = require('http');
const fs = require('fs');
const { text } = require('body-parser');
const express = require("express");
const { response } = require("express");
const server = express();
const hbs = require('express-handlebars');


server.listen(3000,() => {
    console.log("The server is runing on port 3000 apply by MT")

});



