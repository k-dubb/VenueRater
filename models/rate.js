var mongoose = require('mongoose');

var rateSchema = new mongoose.Schema({
  
    rate: { type: Number },
    user_id: { type: String }
    // seatgeekId: { type: String },
});

var Rate = mongoose.model('Rate', rateSchema);

module.exports = Rate;