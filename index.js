
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello CS290');
});

app.listen(3000, function () {
  console.log('I\'m listening on port 3000!');
});
