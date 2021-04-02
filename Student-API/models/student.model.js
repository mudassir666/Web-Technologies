const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

let StudentSchema = new Schema ({ //two values name and age
    name: {type: String, required: true , max: 100} , 
    age: {type: Number, required: true }
})

//export the model
module.exports = mongoose.model('Student',StudentSchema);
