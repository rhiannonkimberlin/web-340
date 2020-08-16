/*
============================================
; Title:  kimberlin-exercise-2.4.js
; Author: Professor Krasso
; Date:   August 16 2020
; Modified By: Rhiannon Kimberlin
; Description: Exercise 2.4 EJS Views
;===========================================
*/

var http = require("http");
var express = require("express");
var path = require("path");
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", function(require, response){
    response.render("index",{
        firstName: "Rhiannon",
        lastName: "Kimberlin",
        address: "1234 In the Stars Lane"
    });
});
http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080. \n")
});
