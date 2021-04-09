const Product = require('../models/product.model')

//http://localhost:3000/products/test
exports.test=(req,res)=>{
    res.send('Greeting from Test Controller')
}


////it is coming from the model and it parameter are comging from request body
exports.product_create=(req,res)=>{ 
    let product = new Product({
        name : req.body.name,      //it just the variable exist in application and its not being reflect on DB
        price : req.body.price
    });

    /////////we commited to the database
///// its refecting on the DB
    product.save((err)=>{
        if(err){
            return next (err);       //error handling method
        }
        res.send('Product Created Sucessfully');
    });
}

exports.product_details=(req,res)=>{

    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })                             

}

exports.product_update=(req,res)=>{ //$set will update the body
                                                 
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product updated.');
    });
}

exports.product_delete=(req,res)=>{

    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
    
}



exports.list=(req,res)=>{
    Product.find((err,products)=>{
if(!err){res.render('product',{page:'Product List',menuId:'list',products:products})}
else{
  console.log('Error in retreieving products'+JSON.stringify(err,underfined,2))  ;
  //docs:docs
}  
})
}