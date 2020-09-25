// Since this is using JS's .filter function
// return FALSE for everything we don't want
// returns TRUE otherwise

// check utils/fiveTweets to see how data will return

module.exports.tweetFilter = (tweet) => {
  if (tweet.text.slice(0,2) === "RT") {
    return false
  }

  return true
}