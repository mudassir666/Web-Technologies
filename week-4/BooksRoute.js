var express = require('express')
var router = express.Router()

////////////////////////////////////web API

// http://localhost:3000/books
router.get('/',(req,res)=>{
    res.send("Retrive all books")
})


router.post('/',(req,res)=>{
    res.send("Add a book")
})
                                              
router.put('/',(req,res)=>{
    res.send("Update a book")
})

router.delete('/',(req,res)=>{
    res.send("Delete a book")
})

module.exports = router // outside files can access this method 