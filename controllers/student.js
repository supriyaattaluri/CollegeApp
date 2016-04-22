var express=require('express');
var router = express.Router();
var fs = require('fs');


router.post('/create',createstudent);
router.delete('/delete/:name', deletestudent);
router.get('/readfiles', readFiles);


function createstudent(req, res){
	var id=req.body.id;
	var name =req.body.name;
	fs.writeFile('public/'+id+'.txt', "/*"+name+"*/", function (err, file)
	{
		res.json({"msg" : "successfully"});
		console.log("inserted data");
	    	
	 });
}


function deletestudent(req, res){
	//Delete process
	res.json({"msg" : "Deleted"});

}

function readFiles(req,  res) {
    console.log("files in public directory");
    fs.readdir("public/", function (err, files) {
        if (err) {
            return console.error(err);
        		}
    	res.json(files);
    	console.log(files);
    });
}

module.exports = router;


