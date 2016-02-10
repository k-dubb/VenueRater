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

// router.get('/main/:id', function(req, res, next) {
//   res.render('main/:id', { title: 'Express' });
// });

// router.get('/rate', function(req, res, next) {
//   res.render('rate', { title: 'Express' });
// });

router.get('/rate/:id', function(req, res, next) {
  res.render('rate', { title: 'Express' });
  res.send(req.params.id);
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});

module.exports = router;
