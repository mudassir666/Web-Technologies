var express = require('express')
var app = express()
var bird = require('./RouteMod')    //routing file
var Rbook = require('./BooksRoute') //routing file

                              ///..........web API .........../////////////////////////


// http://localhost:3000/books
app.use('/books',Rbook) // Rbook is handling this URL


// http://localhost:3000/Students
app.use('/Students',bird) // bird is handling this URL




/*                              
/////////////////////////////////////    this a crud operation    //////////////////////////         

// http://localhost:3000/books 
app.route('/books')
.get((req,res)=>{
    res.send("retrive all books")
})

.post((req,res)=>{
    res.send("add a book")
})
                                              
.put((req,res)=>{
    res.send("update a book")
})

.delete((req,res)=>{
    res.send("delete a book")
})

//////////////////////////////////////////////////////////////////////////////////////////////
*/


var server = app.listen(3000,()=>{console.log("server runing at 3000");})



