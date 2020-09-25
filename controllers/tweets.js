const db = require('../models/index')

const index = (req, res) => {
  db.Tweet.find({}, (err, foundTweets) => {
    if (err) console.log('Error at Tweet index', err);
    res.status(200).json(foundTweets)
  })
}

// const create = (req, res) => {
//   db.Tweet.create(req.body, (err, newTweet) => {
//     if (err) console.log('Error at Tweet create', err);
//     res.status(200).json(newTweet);
//   })
// }

module.exports = {
  index,
  // create
}