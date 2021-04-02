const express = require('express')
const router = express.Router();

const student_controller= require('../controllers/student.controller');


router.get('/test',student_controller.test);

//http://localhost:3000/students/create
router.post('/create',student_controller.student_create);

////for details
router.get('/:id',student_controller.student_details);

/////update router
router.put('/:id/update',student_controller.student_update);

/////delete router
router.delete('/:id/delete',student_controller.student_delete);

//export router
module.exports = router;