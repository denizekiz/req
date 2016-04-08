var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:role/:name/:status', function(req, res, next) {
  console.log(req.params);
  console.log(req.route);
  res.end();
});

module.exports = router;
