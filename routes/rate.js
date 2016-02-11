var express = require('express');
var router = express.Router();
var Rate = require('../models/rate');


 // GET users listing. 
router.get('/:id', function(req, res, next) {
  res.send(req.params.id);
});

module.exports = router;
