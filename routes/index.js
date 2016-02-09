var express = require('express');
var router = express.Router();
var secrets = require('../secrets');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/main', function(req, res, next) {
  res.render('main', { title: 'Express' });
});

router.get('/rate', function(req, res, next) {
  res.render('rate', { title: 'Express' });
});

module.exports = router;
