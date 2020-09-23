const db = require('./models/index');

db.Tweet.deleteMany({}, (err, deletedTweets) => {
  if (err) console.log(err);
  console.log(deletedTweets);
  process.exit();
})
