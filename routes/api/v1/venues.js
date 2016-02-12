var express = require('express');
var router = express.Router();
var Venue = require('../../../models/venue');


router.post('/:id/favorite', function(req, res) {
  var venueID = req.params.id;
  var userID = req.user;

  // User.findByIdAndUpdate( userID, { favorites: venueID }, function(err, user) {
  //   if (err) console.log(err);
  //   console.log(user);
  // });
});

// // "Index" action to list all concerts
// router.get('/main', function(req, res) {

//   Venue.find({}, function(err, results) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//     res.status(200).json(results);
//   });

// });

// // "Show" action to show one concert
// router.get('/main/:id', function(req, res) {

//   Venue.findOne({ _id: req.params.id }, function(err, venue) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//     res.status(200).json(venue);
//   });

// });




// "Create" action to create a new concert
// router.post('/main', function(req, res) {

//   console.log("BODY", req.body);

//   var concert = new Concert(req.body.concert);

//   concert.save(function(err, concert) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//     res.status(200).json(concert);
//   });
// });

// Action to create a new concert
// router.put('/main/:id', function(req, res) {

//   Venue.findByIdAndUpdate(req.params.id, req.body.venue, function(err, venue) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }

//     res.json(venue);
//   });

// });

// router.delete('/main/:id', function(req, res) {

//   Concert.findByIdAndRemove(req.params.id, function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//     res.status(200).json({});
//   });

// });

module.exports = router;