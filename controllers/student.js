var express=require('express');
var router = express.Router();

var mongoose = require('mongoose');
var student = mongoose.model('student');

router.post('/create',createstudent);
router.get('/listall',show);
router.get('/list/:id',showsingle);
router.delete('/delete/:id', deletestudent);
router.put('/edit/:id', editstudent);


function createstudent(req, res)
{
var user = new student(req.body);
   user.save(function(err, doc){
     if(err){
        console.log("record not inserted");
        res.statusCode = 404;
     }
     if(doc){
        res.json("record created");
        console.log("record created"+ doc);
        console.log(doc.id);

             }
 });
}


function deletestudent(req, res){
  
  student.remove({_id:req.params.id},function(err, doc){
   
  res.json("record Deleted");

  });
}


function show(req,res){

  student.find({}, function(err, list){
    console.log(list);
    res.json("all the records in database:"+list);
    });
  }


function showsingle(req , res){
   student.findById(req.params.id, function(err, student) {
            if (err){
                res.send(err);
              }
              console.log(student.id);
            res.json(student);
            
                    });
}


function editstudent(req,res)
{
  student.findById(req.params.id, function(err, student) {

            if (err)
                res.send(err);

            student.username = req.body.username;
            student.phone_numbers = req.body.phone_numbers;
            student.college_name = req.body.college_name;
            student.address = req.body.address; // update the student info


            // save the student
            student.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'student updated!' });
            });

        });

}
module.exports = router;


