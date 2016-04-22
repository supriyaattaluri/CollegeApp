var express=require('express');
var router = express.Router();

router.post('/tinsert',insertteacher);
router.put('/tedit',editteacher);
router.delete('/tdelete',delteacher);
router.get('/tget', teacherdetails);

function insertteacher(req, res){
	res.json({"msg" : "insert success"});
	};

function delteacher(req, res){
		
		res.json("teacher details deleted");
	};

function editteacher(req, res){
		
		res.json("teacher details edited");
	};
function teacherdetails(req, res){
		
		res.json("teacher details ");
	};

module.exports = router;