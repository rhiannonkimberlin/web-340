var express=require("express");
var http = require("http");
const { parse } = require("path");

var app=express();

app.get("/customer/:id", function (req, res) {
    var id = parseInt(req.params.id, 10);
    res.json({
        firstName: "Willow",
        lastName: "Donatti",
        employeeID: id,
        shift: "11:30am-5:00pm"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});