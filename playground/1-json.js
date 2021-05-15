const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)
console.log(bookJSON.title) // -> undefined

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)

fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer)
console.log(dataBuffer.toString())

const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)
