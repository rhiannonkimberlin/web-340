
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://admin:Oreo2626@buwebdev-cluster-1.7z3o0.mongodb.net/test'
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDBConnection error: '));
db.once('open', function() {
    console.log('Application connected to mLab');
});

var app = express();
app.use(logger('dev'));

http.createServer(app).listen(5000, function(){
    console.log('Application started and listening on Port 5000.')
})