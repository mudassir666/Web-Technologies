const http = require('http');

var dt = require('./myfirstmodule');

http.createServer(function(req,res){
  
    res.writeHead(200,{'content-type':'text/plain'});   //this is our server for our own website
    res.write("Hello World\n")
    res.write("Todays date "+dt.GiveDate()+"\n")
    res.write("my name is "+dt.Myname()+"\n")
    res.write(dt.Hello("Ahmed")+"\n")
    res.end("killing the object")

}

).listen(8081, ()=>{                    // listen is to set a port and fat arror notation to show the msg

    console.log("the server is running on port 8081");

})
