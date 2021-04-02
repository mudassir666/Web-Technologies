const Student = require('../models/student.model')

//http://localhost:3000/students/test
exports.test=(req,res)=>{
    res.send('Testing Student API Made By Mudassir Ahmed')
}



exports.student_create=(req,res)=>{ 
    let student = new Student({
        name : req.body.name,      
        age : req.body.age
    });

    
    student.save((err)=>{
        if(err){
            return next (err);       
        }
        res.send('Student registered Sucessfully');
    });
}

exports.student_details=(req,res)=>{

    Student.findById(req.params.id, function (err, student) {
        if (err) return next(err);
        res.send(student);
    })                             

}

exports.student_update=(req,res)=>{ 
                                                 
    Student.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, student) {
        if (err) return next(err);
        res.send('Student info has been updated.');
    });
}

exports.student_delete=(req,res)=>{

    Student.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Student Info has been Deleted successfully!');
    })
    
}
