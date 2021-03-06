const fs = require('fs')

const getNotes = () => 'Your notes...'

const addNote = function(title, body) {
    const notes = loadNotes()

    // This will scan the whole list
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    //console.log(duplicateNote)
    debugger

    if (duplicateNote === undefined) {
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
    const notesToKeep = notes.filter((note) => note.title !== title)
 
    if(notesToKeep.length < notes.length){
        console.log('Removed ' + (notes.length - notesToKeep.length) + ' note(s).')
        saveNotes(notesToKeep)
        return true
    } else {
        return false
    }
}

// Challenge: Wire up list command
const listNotes = function() {
    loadNotes().forEach((note) => {
        console.log(note.title)
    })
}

// Challenge: Wire up read command
const readNote = function(title) {
    const note = loadNotes().find((note) => note.title === title)
    if(note){
        console.log(note.body)
        return true
    } else {
        return false
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
