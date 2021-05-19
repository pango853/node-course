const express = require('express')

const app = express()

// example.com
app.get('', (req, res) => {
    res.send('Hello express!')
})

// example.com/help
app.get('/help', (req, res) => {
    res.send('Help page')
})

// Challenge: Setup two new routes
// example.com/about
app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/weather', (req, res) => {
    res.send('Weather page')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
