/*
============================================
; Title:  kimberlin-exercise-2.2.js
; Author: Professor Krasso
; Date:   August 16 2020
; Modified By: Rhiannon Kimberlin
; Description: Exercise 2.2 Hello World with Express
;===========================================
*/

var express = require('express');
var http = require('http');


var app = express();

app.use(function(req, res)
{
    console.log('In comes a request to %s;', req.url)
    res.end('Hello World\n');
});

http.createServer(app).listen(8080, function()
{
    console.log('Application started on port %s', 8080);
});