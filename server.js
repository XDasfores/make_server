const http = require('http');
const fs = require('fs');
const { text } = require('body-parser');
const express = require("express");
const { response } = require("express");
const server = express();
const hbs = require('express-handlebars');

server.engine(
    'hbs',
    hbs({
        extname: 'hbs',
        defaultLayout: 'layout',
        layoutsDir: __dirname+'/views/layouts',
        partialsDir: __dirname+'views/partials'
    })
);

server.set("View engine", 'hbs');

server.use(express.static(__dirname + '/public'));

server.get('/', (req,res) => {
    res.status(200).render('index.hbs', {Mt});

})
server.listen(3000,() => {
    console.log("The server is runing on port 3000 prodect by MT")

});



