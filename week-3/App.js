const express = require('express')

var app = express()


//http://localhost:3000/
app.get('/',(req,res)=>{

res.send("Hello Class");

})

//http://localhost:3000/Books
app.get('/Books',(req,res)=>{

res.send("Welcome to Books section");

})

//http://localhost:3000/Students
app.get('/Students',(req,res)=>{

    res.send("<h1>Welcome to Students section</h1>");
    
    })

app.post('/',(req,res)=>{
    res.send("you have send a msg to a server")
})


//http://localhost:3000/Students/4/Books/78  //route parameters
app.get('/Students/:studentid/Books/:bookid',(req,res)=>{

    res.send(req.params)

})

//http://localhost:3000/example/b      //route handler
app.get('/example/b',(req,res,next)=>{

    res.write("this is a text from first callback function\n")
   console.log("the response will be send by the next function");
    next()

},(req,res)=>{

res.end("this is a text from second callback function\n")

})

var server=app.listen(3000,()=>{ 
    
    console.log("the server is running on port 3000");
 })