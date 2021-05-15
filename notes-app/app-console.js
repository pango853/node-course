const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
const log = console.log

// Customize yargs version
yargs.version('1.1.0')

// Challenge: Add an option to yargs
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        //log('Adding a new note!', argv)
        //log('Title: ' + argv.title)
        //log('Body: ' + argv.body)
        const isAdded = notes.addNote(argv.title, argv.body)

        if(isAdded) {
            log(chalk.green.inverse('New note added!'))
        } else {
            log(chalk.red.inverse('Note title taken!'))
        }
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        const isRemoved = notes.removeNote(argv.title)
        if(isRemoved) {
            log(chalk.green.inverse('Note removed!'))
        } else {
            log(chalk.red.inverse('No note found!'))
        }
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

//console.log(yargs.argv)
yargs.parse() // MUST run parse() or argv to initialize yargs
