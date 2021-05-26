// CRUD create read update delete

//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { userNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    console.log('Connected correctly!')

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        _id: id,
        name: 'Andres',
        age: 27
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }

        console.log(result.ops) // try to learn from reading docs. https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~insertOneWriteOpCallback
    })
    // test: db.getCollection('users').find({})

    db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 28
        }, {
            name: 'Gunther',
            age: 27
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents')
        }

        console.log(result.ops)
    })

    // Challenge: Insert 3 tasks into a new tasks collection
    db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        }, {
            description: 'Renew inspection',
            completed: false
        }, {
            description: 'Pot plant',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents')
        }

        console.log(result.ops)
    })
    // test: db.getCollection('tasks).find({})

    db.collection('users').findOne({ name: 'Jen' }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })
    
    db.collection('users').findOne({ _id: new ObjectID('60ad2d5467c7013264119ec9') }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    const cursor = db.collection('users').find({ age: 27 }) // find() returns the Cursor
    cursor.toArray((error, users) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(users)
    })
    cursor.count((error, count) => { // you can count without fetching all the data
        if (error) {
            return console.log('Unable to count')
        }

        console.log(count)
    })

    // Challenge: Use find and findOne with tasks
    db.collection('tasks').findOne({_id: new ObjectID('60ad3301123b74285807ee9d')}, (error, task) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(task)
    })
    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(tasks)
    })

    const updatePromise  = db.collection('users').updateOne({
        _id: new ObjectID(id.toHexString())
    }, {
        $set: {
            name: 'Mike'
        },
        $inc: {
            age: 1
        }
    })

    updatePromise.then((result) => {
        console.log(result)
    })
    updatePromise.catch((error) => {
        console.log(error)
    })

    // Challenge: Use updateMany to complete all tasks
    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })
})

