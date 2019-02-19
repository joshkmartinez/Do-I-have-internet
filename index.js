var express = require('express')
var app = express()
const responses = ['No', 'Not really', 'Do you?', 'I hope so.',"No. You do not have internet","Error. Please connect to the internet and try again.","Error reaching internet. Try Again.","Are you on the moon?", "No, why?"]
app.get('/ping', (req, res, next) => {
  res.send('pong')
})

app.get('/help', (req, res, next) => {
  res.send('This very useful service tells you wether you have internet, or not.')
})

app.get('/', function(req, res) {
  res.send(responses[Math.floor(Math.random() * responses.length)])
})
app.get('/responses', function(req, res) {
  res.send(responses)
})
app.listen(3000, () => {
  //console.log('Server running on port 3000')
})
