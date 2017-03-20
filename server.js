
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var Meme = require("./models/MemeModel.js");

//let's get going...
var app = express();
mongoose.connect('mongodb://localhost/memes');

//some middleware that we need
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static('node_modules'));

//API routes
app.get('/memes', function(req, res, next) {
  Meme.find(function(error, memes) {
    if (error) {
      console.error(error)
      return next(error);
    } else {
      res.send(memes);
    }
  });
});

app.post('/memes', function(req, res, next) {
  Meme.create(req.body, function(err, meme) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.json(meme);
    }
  });
});

app.delete('/memes/:id', function(req, res, next) {
  Meme.remove({ _id: req.param.id }, function(err) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.send("meme Deleted");
    }
  });
});

// // error handler to catch 404 and forward to main error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// main error handler
// warning - not for use in production code!
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

//start the server
app.listen('27017', function() {
  console.log("yo yo yo, on 8000 bro");
});
