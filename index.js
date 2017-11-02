const app = require('express')()

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
  console.log('Express app listening on port', app.get('port'))
})

app.get('/', (req, res) => {
  res.send('Welcome to my new Heroku Express app!')
})

app.get('/random', (req, res) => {
  let num = Math.floor(Math.random() * 5)
  switch (num) {
    case 1:
      res.send('You got a random "one"');
      break;
    case 2:
      res.send('You got a random "two"');
      break;
    case 3:
      res.send('You got a random "three"');
      break;
    default:
      res.send('You didn\'t get a lucky number')
  }
})