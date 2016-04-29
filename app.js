var express=require('express');
var bodyparser=require('body-parser');
//var multer=require('multer');

var app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

var mongoose = require('mongoose');
require('./model/student')(mongoose);
mongoose.connect('mongodb://localhost:27017/collegedb');





var student= require('./controllers/student');
app.use('/student' , student);

var course= require('./controllers/course');
app.use('/course',course);

var teachers= require('./controllers/teachers');
app.use('/teachers',teachers);

var anounce= require('./controllers/anounce');
app.use('/anounce',anounce);
	

//app.use(multer({dest:__dirname+'/public/'}).any());

// app.post('/upload',function(req,res){
// 	//var name=req.f
// 	console.log(req.body);
//     console.log(req.files[0]);// for first file information on console
//     console.log(req.files);// for all inserted files information on console.

//     res.send('sucess');

// });
app.listen(8081);
console.log("running at 8081");		