// Since this is using JS's .filter function
// return FALSE for everything we don't want
// returns TRUE otherwise

// check utils/fiveTweets to see how data will return

module.exports.tweetFilter = (tweet) => {
  if (tweet.text.slice(0,2) === "RT") {
    return false
  }
  // filter for tweet.truncated = true?
  // only accept if = false
  // that way we're limiting the text that comes in for length.

  // filter for character length?
  // that way buttons don't get pushed off the screen.

  return true
}