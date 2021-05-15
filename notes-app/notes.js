const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    })
    console.log(duplicateNotes)
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
    console.log(notes)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)    
    } catch (e) {
        return []
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Challenge: Wire up removeNote
const removeNote = function(title) {
    const notes = loadNotes()
    const found = notes.filter(function(note) {
        return note.title === title
    })
    const newNotes = notes.filter(function(note) {
        return note.title !== title
    })
 
    if(found.length === 1){
        console.log('Found', found)
        found[0].title = 'removed'

        newNotes.push(found)
        saveNotes(newNotes)        
    } else {
        console.log('Note note found!')
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
