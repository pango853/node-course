const request = require('request')

const access_key = process.argv[2]
const url = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query=37.8267,-122.4233'

debugger

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})

// Customize HTTP request
request({url: url, json: true}, (error, response) => {
    console.log(response.body.current)
})


// Challenge: Print a small forecast to the user
const url2 = 'http://api.weatherstack.com/forecast?access_key=' + access_key + '&query=Kuala Lumpur&hourly=1&units=f'
request({url: url2, json: true}, (error, response) => {
    debugger
    const description = response.body.current.weather_descriptions[0]
    const temperature = response.body.current.temperature
    const feels_like = response.body.current.feelslike

    console.log(description + '. It is currently ' + temperature+ ' degrees out, but it feels like ' + feels_like + ' degrees out.')
})

/**
 * PREPARATION
 * 1. First you have to register a Free plan at weatherstack.com
 * 2. Mark down the access key
 * 3. Try access http://api.weatherstack.com/current?access_key=xxxxxxxxxxxxxxxxx&query=37.8267,-122.4233
 */