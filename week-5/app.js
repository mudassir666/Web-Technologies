const express = require('express')
const bodyParser = require('body-parser')
const product = require('./routes/product.route') // imports routes for the products
const mongoose = require('mongoose')


//our app variable
const app = express();

//---------------------MOONGOOSE CONNECTION-----------

mongoose.connect("mongodb://localhost/productDb",
{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("CONNECTED TO DATABASE");
})
.catch(err=>{
    console.log("CANNOT CONNECTED TO DATABASE",err);
    process.exit();
});


//---------------------MOONGOOSE CONNECTION-----------

//////////////////////Body parser/////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//////////////////////body parser///////


//http://localhost:3000/products
app.use('/products',product); //its a route which is calling product router and that router will call controller

app.listen(3000,()=>{console.log("The port is running on 3000");})
