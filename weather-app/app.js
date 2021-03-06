const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const weatherstack_access_key = process.argv[2]
const mapbox_access_token = process.argv[3]
const address = process.argv[4]

// const url = 'http://api.weatherstack.com/forecast?access_key=' + weatherstack_access_key + '&query=Kuala Lumpur&hourly=1&units=f'
// request({url: url, json: true}, (error, response) => {
//     debugger

//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const description = response.body.current.weather_descriptions[0]
//         const temperature = response.body.current.temperature
    
//         console.log(description + '. ' + temperature)
//     }
// })


// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Kuala Lumpur.json?access_token=' + mapbox_access_token + '&limit=1'
// request({url: geocodeURL, json: true}, (error, response) => {
//     debugger

//     if (error) {
//         console.log('Unable to connect to location service!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location')
//     } else {
//         const center = response.body.features[0].center
//         const latitude = center[1]
//         const longitude = center[0]
//         console.log(latitude, longitude)
//     }
// })

// Challenge: Use both destructuring and property shorthand

// Challenge: Accept location via command line argument
if (!address){
    console.log('Please provide an address')
} else {
    geocode(address, mapbox_access_token, (err, {latitude, longitude, location} = {}) => { // add '= {}' to use default when there is no response
        debugger
    
        if (err) {
            return console.log(err)
        }
        forecast(latitude, longitude, weatherstack_access_key, (err, forecastData) => {
            debugger
    
            if (err) {
                return console.log(err)
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })    
}
