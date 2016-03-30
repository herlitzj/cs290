
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/assets/content.html'));
  app.use(express.static(path.join(__dirname, 'assets')));
});

app.listen(3000, function () {
  console.log('I\'m listening on port 3000!');
});
