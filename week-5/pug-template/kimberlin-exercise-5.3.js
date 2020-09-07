//require
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

//app
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

//route
app.get('/', function(req, res) {
    res.render('index', {
        message: 'Dear sweet Leota, beloved by all. In regions beyond now, but having a ball.'
    });
});

//create
http.createServer(app).listen(8000, function() {
    console.log('Application is running on Port 8000');
})