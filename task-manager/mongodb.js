// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { userNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    console.log('Connected correctly!')

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Andres',
        age: 27
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }

        console.log(result.ops) // try to learn from reading docs. https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~insertOneWriteOpCallback
    })
    // test: db.getCollection('users').find({})

})

