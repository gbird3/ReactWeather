var express = require('express');

// Create the app
var app = express();

const PORT = process.env.port || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hotname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express Server is up on port ' + PORT);
});
