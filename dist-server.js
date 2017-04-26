var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('dist'));

app.listen(port, () => {
  console.log('Listening on port ' + port);
})
