const request = require('request')

const access_token = process.argv[2]
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Kuala Lumpur.json?access_token=' + access_token + '&limit=1'

// Goal: Print the lat/long for Kuala Lumpur
request({url: url, json: true}, (error, response) => {
    debugger

    const center = response.body.features[0].center
    const latitude = center[1]
    const longitude = center[0]
    console.log(latitude + '/' + longitude)
})