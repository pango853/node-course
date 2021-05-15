const fs = require('fs')

// Challenge: Work with JSON and the file system

const dataBuffer = fs.readFileSync('2-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.age = data.age + 1

const dataJSON2 = JSON.stringify(data)
console.log(dataJSON2)

fs.writeFileSync('2-json--updated.json', dataJSON2)
