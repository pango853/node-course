const request = require('request')

const forecast = (latitude, longitude, access_key, callback) => {
    const url = 'http://api.weatherstack.com/forecast?access_key=' + access_key + '&query=' + latitude + ',' + longitude + '&hourly=1&units=f'
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (response.body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, {
                description: response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature
            })
        }
    })    
}

module.exports = forecast
