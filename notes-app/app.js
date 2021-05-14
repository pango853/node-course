const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

fs.writeFileSync('notes.txt', 'My name is Pango Chan!')

// Challenge: Append a message to notes.txt

fs.appendFileSync('notes.txt', ' I just added one message!!')
fs.appendFileSync('notes.txt', ' Oh, I again just added another message!!!')

const add = require('./utils.js')

const sum = add(4, 2)
console.log(sum)

// Challenge: Define and use a function in a new file
const getNotes = require('./notes.js')
const notes = getNotes()
console.log(notes)

const validator = require('validator')
console.log(validator.isEmail('iam@pango.chan'))
console.log(validator.isURL('https://yahoo.com'))

// Challenge: Use the chalk library in your project
// npm install chalk@4.1.1
const chalk = require('chalk')
const log = console.log;

log(chalk.green('Success!'))
log(chalk.red.bold.inverse('Error!'))
