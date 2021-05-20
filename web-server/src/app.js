const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(__filename)

const app = express()

// Define paths for Express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set handlebars(hbs) as view template engine, and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set static directory to serve
app.use(express.static(publicPath))

// example.com
app.get('', (req, res) => {
    //res.send('<h1>Weather</h1>')
    res.render('index', {
        title: 'Weather App',
        name: 'Andrew Mead'
    })
})

// example.com/help
app.get('/help', (req, res) => {
    res.send([{ // can specify JSON
        name: 'Andrew'
    },{
        name: 'Sarah'
    }])
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
