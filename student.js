
exports.insertsdetails= function(req, res)
{
	
		console.log("details inserted successfully");
		res.send('hello ' + req.params.name + '!');
			
};
exports.deletesdetails= function(req, res)
   {
		console.log("deleted");
		res.send("deleted");
	};


