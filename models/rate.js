// load the things we need
var mongoose = require('mongoose');
// var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var rateSchema = new mongoose.Schema({
  
    rate: { type: Number },
    user_id: { type: String }
    // seatgeekId: { type: String },
  
});



var Rate = mongoose.model('Rate', rateSchema);

module.exports = Rate;