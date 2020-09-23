const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  id: String,
  text: String,
  created_at: Date,
  username: String,
  full_name: String,
  user_img: String,
})

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;