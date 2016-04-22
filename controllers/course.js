
var express=require('express');
var router = express.Router();

router.post('/cinsert',courseDetails);
router.put('/cdelete',ceditDetails);

function courseDetails(req, res){
	res.json({"msg" : "Deleted"});
	};

function ceditDetails(req, res){
		console.log("course details");
		res.json("course details edited");
	};

module.exports = router;