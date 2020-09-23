const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  id: String,
  text: String,
  created_at: String,
  username: String,
  full_name: String
})

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;