//import mongoose
const mongoose = require('mongoose')

//create Schema variable
const Schema = mongoose.Schema

//create Schema
const ItemSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('item', ItemSchema)