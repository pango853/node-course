const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

fs.writeFileSync('notes.txt', 'My name is Pango Chan!')

// Challenge: Append a message to notes.txt

fs.appendFileSync('notes.txt', ' I just added one message!!')
fs.appendFileSync('notes.txt', ' Oh, I again just added another message!!!')
