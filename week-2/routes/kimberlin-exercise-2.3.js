/*
============================================
; Title:  kimberlin-exercise-2.3.js
; Author: Professor Krasso
; Date:   August 16 2020
; Modified By: Rhiannon Kimberlin
; Description: Exercise 2.3 Routes
;===========================================
*/

var express = require("express");
var http = require("http");
var app = express();
app.get("/", function(request, response){
    response.end("Welcome to the homepage! \n");
});
app.get("/about", function(request, response){
    response.end("Welcome to the about page! \n");
});
app.get("/contact", function(request, response){
    response.end("Welcome to the contact page! \n");
});
app.use(function(request, response){
    response.statusCode=404;
    response.end("404!\n");
});
http.createServer(app).listen(3000, function(){
    console.log('Application started on port %s', 3000)
});