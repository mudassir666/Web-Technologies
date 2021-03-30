var express = require('express')
var router = express.Router()

////////////////////////////////////web API

/// define the home page route
// http://localhost:3000/Students/
router.get('/',(req,res)=>{
    res.send("Welcome to Bird home page")
})

/// define about route
// http://localhost:3000/Students/about
router.get('/about',(req,res)=>{
    res.send("Welcome to About bird page")
})

module.exports = router // outside files can access this method 