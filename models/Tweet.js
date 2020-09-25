const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  id: String,
  text: String,
  // we'll likely want to change this to Date? But maybe it doesn't matter at all.
  created_at: String,
  // these should be replaced with a PK from Candidate
  username: String,
  full_name: String,
  user_img: String,
})

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;