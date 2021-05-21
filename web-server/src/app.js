const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Parse arguments
const weatherstack_access_key = process.argv[2]
const mapbox_access_token = process.argv[3]

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

// Challenge: Update weather endpoint to accept address
// Challenge: Wire up /weather

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({ error: 'You must provide a address term' })
    } else {
        const address = req.query.address

        geocode(address, mapbox_access_token, (err, {latitude, longitude, location} = {}) => {
            if (err) {
                return res.send({ error: err })        
            }
            forecast(latitude, longitude, weatherstack_access_key, (err, forecastData) => {
                if (err) {
                    return res.send({ error: err })        
                }

                res.send({
                    forecast: forecastData,
                    location: location,
                    address: address
                })
            })
        })    
    }
})

app.get('/products', (req, res) => {
    console.log(req.query)

    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        product: [],
        category: []
    })
})

// Challenge: Create and render a 404 page with handlebars

app.get('/admin/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'I am not gonna tell you the page is not found'
    })
})

// Match everything else and show 404 page
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
