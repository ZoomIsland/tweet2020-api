const axios = require('axios');
require('dotenv').config();
const db = require('./models/index');

const config = {
  headers: {
    Authorization: `Bearer ${process.env.twitterAuthToken}`
  }
}

const tweetIds = [];

axios.get('https://api.twitter.com/2/tweets/1303370008832155648?expansions=author_id&user.fields=name,username,profile_image_url&tweet.fields=created_at', config)
  .then((res) => {
    // build object to send
    const tweetData = {};
    tweetData.id = res.data.data.id;
    tweetData.text = res.data.data.text;
    tweetData.created_at = res.data.data.created_at;
    tweetData.username = res.data.includes.users[0].username;
    tweetData.full_name = res.data.includes.users[0].name;
    tweetData.user_img = res.data.includes.users[0].profile_image_url;
    // send object
    db.Tweet.create(tweetData, (err, newTweet) => {
        if (err) console.log('Error at getTweets create', err);
        console.log(newTweet)
        // process.exit();
      })

  })
  .catch((err) => console.log(err))