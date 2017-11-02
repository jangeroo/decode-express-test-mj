const app = require('express')()

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Express app listening on port', app.get('port'))
})

app.get('/', (req, res) => {
    res.send('Welcome to my new Heroku Express app!')
})