var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


var port = 3000
var server = app.listen(port, function () {
    console.log("connection successfull", port)
});



module.exports = app;
