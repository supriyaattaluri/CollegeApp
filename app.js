var express=require('express');
var bodyparser=require('body-parser');

var app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

var mongoose = require('mongoose');
require('./model/student')(mongoose);
require('./model/teacher')(mongoose);

mongoose.connect('mongodb://localhost:27017/collegedb');



var student= require('./controllers/student');
app.use('/student' , student);

var teachers= require('./controllers/teachers');
app.use('/teachers',teachers);

var course= require('./controllers/course');
app.use('/course',course);

var anounce= require('./controllers/anounce');
app.use('/anounce',anounce);

var fileop=require('./controllers/fileoperations');
app.use('/fileop',fileop);
	

app.listen(8081);
console.log("running at 8081");		