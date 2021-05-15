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
        return true
    } else {
        return false
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
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title
    })
 
    if(notesToKeep.length < notes.length){
        console.log('Removed ' + (notes.length - notesToKeep.length) + ' note(s).')
        saveNotes(notesToKeep)
        return true
    } else {
        return false
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
