const db = require('../models/index')
const grabTweets = require('../getTweetsById')
let visitNum = 0;

const index = (req, res) => {

  // console.log(grabTweets.getTweets('25073877'));

  if(visitNum % 5 === 0){
    grabTweets.getTweets('25073877');
  }

  db.Tweet.find({}, (err, foundTweets) => {
    if (err) console.log('Error at Tweet index', err);
    res.status(200).json(foundTweets)
  })
  console.log(visitNum);
  visitNum++;

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