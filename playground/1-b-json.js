const fs = require('fs')

// Challenge: Work with JSON and the file system

const dataBuffer = fs.readFileSync('1-b-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.age = data.age + 1

const dataJSON2 = JSON.stringify(data)
console.log(dataJSON2)

fs.writeFileSync('1-b-json--updated.json', dataJSON2)
