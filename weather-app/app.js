const request = require('request')

const access_key = process.argv[2]
const url = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query=37.8267,-122.4233'

debugger

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})

/**
 * PREPARATION
 * 1. First you have to register a Free plan at weatherstack.com
 * 2. Mark down the access key
 * 3. http://api.weatherstack.com/current?access_key=xxxxxxxxxxxxxxxxx&query=37.8267,-122.4233
 */