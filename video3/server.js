//import dependencies
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//allow server.js access to the API routes for the items
const items = require('./routes/api/items')

const app = express()
console.log('app express assignment works')
//Bodyparser Middleware
app.use(bodyParser.json())

//DB config
const db = require('./config/keys').mongoURI

//connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

//Use Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))

