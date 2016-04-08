var express = require('express');
var router = express.Router();

/* GET body */
router.post('/',function(req,res)
	{
		console.log(req.body);
		res.end(JSON.stringify(req.body)+"\n")
	});

module.exports = router;
