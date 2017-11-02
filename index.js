const app = require('express')()

app.listen(5000, function() {
    console.log('Express app listening on port 5000...')
})

app.get('/', (req, res) => {
    res.send('Welcome to my new Express app!')
})