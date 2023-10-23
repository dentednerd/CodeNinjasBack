var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('users', UserSchema);