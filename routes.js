const express = require('express')
const router = new express.Router()
const { findItem, updateItem, deleteItem } = require('./middleware')

const items = require('./fakeDb')


router.get('', function(req,res){
    return res.json(items)
})

router.post('', function(req,res){
    items.push(req.body)
    return res.json({
        added: req.body
    })
})


router.get('/:name', function(req,res){
    let foundItem = items[findItem(req.params.name)]
    return res.json(foundItem)
})

router.patch('/:name', function(req,res){
    let updatedItem = items[updateItem(req.params.name, req.body.name, req.body.price)]
    return res.json({
        updated: updatedItem
    })
})

router.delete('/:name', function(req,res){
    deleteItem(req.params.name)
    return res.json({
        message: 'deleted'
    })
})


module.exports = router;