var express = require('express')
var app = express()
const responses = [
  'No',
  'Not really',
  'Do you?',
  'I hope so.',
  'No. You do not have internet',
  'Connect to the internet and try again.',
  'Error reaching internet. Try Again.',
  'Are you on the moon?',
  'No, why?',
  "Of course not."
]
app.get('/ping', (req, res, next) => {
  res.send('pong')
})

app.get('/help', (req, res, next) => {
  res.send(
    'This very useful service tells you wether you have internet, or not.'
  )
})

app.get('/', function(req, res) {
  if (9 === Math.floor(Math.random() * 9) + 1) {
    res.redirect('https://rickroll.now.sh')
  } else {
    res.send(responses[Math.floor(Math.random() * responses.length)])
  }
})
app.get('/responses', function(req, res) {
  res.send(responses)
})
app.listen(3000, () => {
  //console.log('Server running on port 3000')
})
