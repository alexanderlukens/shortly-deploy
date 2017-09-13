var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var Promise = require('bluebird');



var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true})


UserSchema.methods.comparePassword = function(attemptedPassword, callback) {

    let isMatch = attemptedPassword === this.get('password')
    console.log(isMatch)
    callback(isMatch);
    // bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
    //   console.log(isMatch)
    //   callback(isMatch);
    // });
}

UserSchema.methods.hashPassword = function() {
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
  }



module.exports = mongoose.model('User', UserSchema);
