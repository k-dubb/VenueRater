var mongoose = require('mongoose');
// var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var venueSchema = new mongoose.Schema({
  
    stadiumName: { type: String },
    team: { type: String },
    address: { type: String },
    url: { type: String }
    // seatgeekId: { type: String },
});

var Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;