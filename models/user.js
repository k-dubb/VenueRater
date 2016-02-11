var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  local: {
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      created_at: Date,
      updated_at: Date
    },
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

var User = mongoose.model('User', userSchema);

// create the model for users and expose it to our app
// module.exports = mongoose.model('User', userSchema);
module.exports = User;