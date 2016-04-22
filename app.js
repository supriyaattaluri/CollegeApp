var express=require('express');
var bodyparser=require('body-parser');

var app=express();

app.use(bodyparser.urlencoded());
app.use(bodyparser.json());


var student= require('./controllers/student');
app.use('/student' , student);

var course= require('./controllers/course.js');
app.use('/course',course);

var teachers= require('./controllers/teachers.js');
app.use('/teachers',teachers);

var anounce= require('./controllers/anounce.js');
app.use('/anounce',anounce);
	
app.listen(8081);
console.log("running at 8081");		