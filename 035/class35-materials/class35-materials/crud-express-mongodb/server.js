//server.js
//console.log('May Node be with you')
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://psf:dUaO38CQ4QQXXst6@cluster0.zfkbc1k.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true
}, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    const db = client.db('star-wars')

    app.use(bodyParser.urlencoded({ extended: true }))

    //CRUD HANDLERS
    app.get('/', (req, res) => {
       // res.send('Hello World')
       res.sendFile(__dirname + '/index.html')
    })

    app.post('/quotes', (req, res) => {
        console.log(req.body)
    })

    app.listen(3000,function() {
        console.log('listening on 3000')
    })

})
.catch(console.error)
