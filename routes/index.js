var express = require('express');
var router = express.Router();
var request = require('request');
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
    var id = req.params.id;
    var uri = 'http://api.seatgeek.com/2/venues/';

    request({
        method: 'GET',
        uri: uri,
        qs: {id: id},
        headers: {encoding: 'utf8', 'Content-type': 'application/json'}
    }, function(error, response, body) {
        if (error) throw error;
        console.log(response.statusCode);
        var venue = JSON.parse(body);
        console.log(venue);
        // res.send('success');
        res.render('rate', { name: venue.venues[0].name,
                             address: venue.venues[0].address,
                             city: venue.venues[0].city,
                             state: venue.venues[0].state,
                             zip: venue.venues[0].postal_code,
                             url: venue.venues[0].url

        });
        //res.render('show_movie', {title: movie.results[0].display_title});
    });

  // res.render('rate', { venueName: req.params.name, venueAddress: data.venues.address, venueCity: , venueState: , venueZipCode:  });
//   res.render('rate');
//   res.send(req.params.id);
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});

module.exports = router;
