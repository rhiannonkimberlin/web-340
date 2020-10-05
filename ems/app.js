var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var helmet = require("helmet");


var mongoose = require('mongoose');
var Employee = require('./models/employee');

var mongoDB ='mongodb+srv://admin:admin1234@buwebdev-cluster-1.7z3o0.mongodb.net/test';

mongoose.connect(mongoDB, {
  useMongoClient: true,
});

var app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

var csrfProtection = csrf({ cookie: true });

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

app.use(logger('short'));
app.use(cookieParser());
app.use(helmet.xssFilter());
app.use(csrfProtection);
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
      res.render('index', {
        title: 'Home Page',
        message: "XSS Prevention Example",
        active: "home",
      });
  });

app.get('/new', function(req, res) {
  res.render('new', {
    title: 'EMS | New',
    active: 'new',
  });
});

app.get('/list', function (req,res){
  Employee.find({}, function (error, employees) {
    if (error) {
      throw error;
    }
    res.render('list',{
      title: 'Employee List',
      active: 'view',
      employees: employees,
    });
  });
});

app.post('/process', function(req, res) {
  console.log(req.body);

  if (!req.body.firstName && !req.body.lastName && !req.body.email){
    res.status(400).send('First Name, Last Name and Email');
    return;
  }


  var first_name = req.body.firstName;
  var last_name = req.body.lastName;
  var email = req.body.email;

  // create employee model
 var employee = new Employee({
  firstName: first_name,
  lastName: last_name,
  email: email,
  });

  // save
 employee.save(function(error) {
    if (error) {
      throw error;
    }
      console.log(first_name + ' saved successfully!');

  });
  res.redirect('/list');
});


app.get("/view/:firstName/:lastName/:email", function (request, response) {

  var firstName = request.params.firstName;
  var lastName = request.params.lastName;
  var email = request.params.email;

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  Employee.find({
    'firstName': firstName,
    'lastName': lastName,
    'email': email
  },
     function(error, employee) {
      if (error) throw error;
      console.log(employee);
      if (employee.length > 0) {
          response.render("view", {
              title: "Employee Records",
              active: "view",
              employee: employee
          })
      }
      else {
          response.redirect("/list")
      }
  });
});

http.createServer(app).listen(app.get('port'), function()
{ console.log('Application started on port'+ app.get('port')) });