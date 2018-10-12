// dependencies:
var bluebird = require('bluebird')
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

// set the root directory
var app = express();

// set port; uses web port if available
var port = process.env.PORT || 8000;

// connect to mongoose here
var mongoose = require('mongoose')
mongoose.Promise = bluebird
mongoose.connect('serverurl', { useNewUrlParser: true })
  .then(() => {console.log("Successful MongoDB connection")})
  .catch(() => {console.log("Failure MongoDB connection")});  

// Disable CORS since our app is on a separate domain (port 8001)
app.use(function(req,res,next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8001");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// express setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

// Route setup
var mainApi = require('./routes/app_routes.router');
app.use('/api', mainApi);

module.exports = app;