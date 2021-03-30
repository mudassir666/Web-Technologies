const express = require('express')
const router = express.Router();
//include the controller here
const product_controller= require('../controllers/product.controller');

//a simaple test url to check that all of our files are communicating corrrectly.
//routes here
router.get('/test',product_controller.test);

//http://localhost:3000/products/create
router.post('/create',product_controller.product_create);

////for details
router.get('/:id',product_controller.product_details);

/////update router
router.put('/:id/update',product_controller.product_update);

/////delete router
router.delete('/:id/delete',product_controller.product_delete);

//export router
module.exports = router;