var express = require('express')
var app = express()
var port = process.env.PORT || 5000

app.use(express.static('dist'));

app.listen(port, function () {
  console.log('App listening on port ' + port + '.')
})
