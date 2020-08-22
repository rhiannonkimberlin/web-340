var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.get('/', function(req, res){
    res.render('index', {
        message: 'Im excited to use the Morgan Logger!'
    });
});

http.createServer(app).listen(8080, function() {
    console.log('Application started and listening on port %s', 8080)
})