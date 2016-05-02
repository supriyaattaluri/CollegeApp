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
student.update({_id:req.params.id}, {$set:{username:req.body.username,
            phone_numbers :req.body.phone_numbers,
            college_name :req.body.college_name,
            address : req.body.address}}, {w:1}, function(err, result) {
              if(err){
                console.log(err.stack);
              }
              res.json({ message: 'student updated!' });
            });

       

}
module.exports = router;


