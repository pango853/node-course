const https = require('https')
const url = 'https://www.yahoo.co.jp'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        console.log(chunk)
        data = data + chunk.toString()
    })

    response.on('end', () => {
        console.log(data)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()