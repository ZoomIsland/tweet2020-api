const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
  twitter_id: String,
  username: String,
  full_name: String,
  user_img: String,
  tweets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet',
  }]
})

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;