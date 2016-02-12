var express = require('express');
var router = express.Router();
var request = require('request');
var secrets = require('../secrets');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main', function(req, res, next) {
  res.render('main', { title: 'venuRater' });
});

router.get('/rate/:id', function(req, res, next) {
    var id = req.params.id;
    var uri = 'http://api.seatgeek.com/2/venues/';

    request({
        method: 'GET',
        uri: uri,
        qs: {id: id},
        headers: {encoding: 'utf8', 'Content-type': 'application/json'}
    }, function(error, response, body) {
            if (error) throw error;
            
            var venue = JSON.parse(body);

            res.render('rate', { name: venue.venues[0].name,
                                 address: venue.venues[0].address,
                                 city: venue.venues[0].city,
                                 state: venue.venues[0].state,
                                 zip: venue.venues[0].postal_code,
                                 url: venue.venues[0].url,
            });
       });

});

// router.get('/main/:id', function(req, res, next) {
//   res.render('main/:id', { title: 'Express' });
// });

// router.get('/rate', function(req, res, next) {
//   res.render('rate', { title: 'Express' });
// });

module.exports = router;
