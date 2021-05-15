const chalk = require('chalk')
const getNotes = require('./notes.js')
const yargs = require('yargs')
const log = console.log

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        log('Adding a note')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        log('Removing the note')
    }
})

// Challenge: Add two new commands
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        log('Listing the notes')
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        log('Reading a note')
    }
})

console.log(yargs.argv)
