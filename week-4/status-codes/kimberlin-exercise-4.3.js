var express = require("express");
var http = require("http");
const { response } = require("express");

var app = express();

app.get("/not-found", function(require, response){
    response.status(404);
    response.json({
        error: "Darnit! Nothing found here!"
    });
});

app.get("/ok", function(request,response){
    response.status(200);
    response.json({
        message: "Ayeee! We loaded correctly!"
    });
});

app.get("/not-implemented", function(request,response){
    response.status(501);
    response.json({
        error: "Nothing got implemented here! Sorry."
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Apllication started on port 8080!");
});