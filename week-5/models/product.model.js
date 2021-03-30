const mongoose = require('mongoose')
const Schema = mongoose.Schema; //layout

let ProductSchema = new Schema ({ //entity Product with two column with 2 values
    name: {type: String, required: true , max: 100} , 
    price: {type: Number, required: true}
})

//export the model
module.exports = mongoose.model('Product',ProductSchema);

//exporting the model class to product 
// model name should be start with capital letter 