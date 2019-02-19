var express = require('express')
var app = express()

app.get('/ping', (req, res, next) => {
  res.send('pong')
})

app.get('/help', (req, res, next) => {
  res.send('This tells you if you have internet or not.')
})

app.get('/', function(req, res) {
  res.send('no')
})
app.listen(3000, () => {
  //console.log('Server running on port 3000')
})
