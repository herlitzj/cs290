
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  app.use(express.static('./assets'));
});

app.listen(3000, function () {
  console.log('I\'m listening on port 3000!');
});
