//import express router
const express = require('express')
const res = require('express/lib/response')
//create router instance
const router = express.Router()

//Item Model
const Item = require('../../models/Item')

//@route GET api/items
//@desc GET All items
//access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
})

//@route POST api/items
//@desc  create a POST
//access Public
router.post('/', (req, res) => {
    //create new item lives in the temp memory
    const newItem = new Item({
        name: req.body.name
    })

    //save new item, now lives in perm storage
    newItem.save().then(item => res.json(item))
})

//export the model
module.exports = router