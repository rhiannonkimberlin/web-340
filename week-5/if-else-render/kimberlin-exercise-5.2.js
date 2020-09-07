// requires
var express = require('express');
var http = require('http');
var path = require('path');

//ap functions
var app = express();
app.set('vews', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//local composer array
var composers = [
    "Bach",
    "Mozart",
    "Beethoven",
    "Verdi"
];

//routes
app.get('/', function(req, res) {
    res.render('index', {
        names: composers
    });
});

//server
http.createServer(app).listen(3000, function(){
    console.log("Application started and listening on Port 3000")
})