var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
//added 9.21
var helmet = require("helmet")
var app = express();
var mongoose = require('mongoose');
//added 9.28
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var csrfProtection = csrf({cookie: true});

//added 9.19
var employee = require('./models/employee');

//added 9.19 mongo db
var mongoDB ='mongodb+srv://admin:admin1234@buwebdev-cluster-1.7z3o0.mongodb.net/test';

mongoose.connect(mongoDB, {
    useMongoClient: true
  });
  mongoose.Promise = global.Promise;

  var db= mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error: '));
  db.once('open', function() {
      console.log('Application connected to mLab MongoDB instance');
  });


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
//added 9.21
app.use(helmet.xssFilter());
app.get("/", function (req, res) {
    res.render("index", {
        title: 'Home Page',
        //added message 9.21
        message: "XSS Prevention Example"
    });
});
//added 9.28
app.post("/process", function(req, res){
    console.log(req.body.txtName);
    res.redirect("/")
});

//added 9.28
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(req, res, next) {
    var token = request.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
})

//added 9.19 employee model
var employee = new employee({
    firstName: 'Willow',
    lastName: 'Donatti'
})



http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080.")
})