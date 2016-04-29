var express=require('express');
var router = express.Router();

var mongoose = require('mongoose');
var student = mongoose.model('student');

router.post('/create',createstudent);
router.get('/show',show);
router.get('/show/:id',showsingle);
router.delete('/delete/:id', deletestudent);


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
            res.json(student);
            console.log(student.id);
                    });
}

module.exports = router;


