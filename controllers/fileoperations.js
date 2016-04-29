var express=require('express');
var router = express.Router();
var fs = require('fs');


router.post('./createfile',createFile);
router.get('/readfiles', readFiles);
router.post('/uploadfile',uploadFile);



function createFile(req,res)
{
    var id=req.body.id;
   var name =req.body.name;
    fs.writeFile('public/'+id+'.txt', name, function (err, file)
    {
        res.json({"msg" : "successfully"});
       console.log("inserted data");
    });
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


function uploadFile(req,res)
{
	console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);
    var response = {
                   message:'File uploaded successfully',
                   filename:req.files.file.name
                   };
                   
    console.log( response );
    res.end( JSON.stringify( response ) );	

}

module.exports = router;