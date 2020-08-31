var express = require("express");
var http = require("http");
const { response } = require("express");

var app = express();

// cURL GET
app.get('/', function(request, response){
    response.send('This is the GET request!')
});

// cURL POST
app.post('/', function(request, response){
    response.send('This is the POST request!')
});

//cURL PUT
app.put('/', function(require, response){
    response.send('This is the PUT request!')
});

//cURL DELETE
app.delete('/', function(require, response){
    ressponse.send('This is the DELETE request!')
});

//App started message and post specification
http.createServer(app).listen(8080, function(){
    console.log('Applcation has started on port 8080!');
});