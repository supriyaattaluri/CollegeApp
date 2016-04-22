var fs=require('fs');
var express=require('express');
var app=express();
app.use(express.static('public'));
app.post('/:name',function(req,res)
	{

		
		
	});


 app.listen(2016);   	
//fs.readFile()