const axios = require('axios');
require('dotenv').config();
const db = require('./models/index');

const config = {
  headers: {
    Authorization: `Bearer ${process.env.twitterAuthToken}`
  }
}

axios.get('https://api.twitter.com/2/tweets/1298671449968959490?expansions=author_id&user.fields=name,username,profile_image_url&tweet.fields=created_at', config)
  .then((res) => {
    // build object to send
    const tweetData = {};
    tweetData.id = res.data.data.id;
    tweetData.text = res.data.data.text;
    tweetData.created_at = res.data.data.created_at;
    tweetData.username = res.data.includes.users[0].username;
    tweetData.full_name = res.data.includes.users[0].name;
    tweetData.user_img = res.data.includes.users[0].profile_image_url;
    // const tweetJSON = JSON.stringify(tweetData);
    // console.log(tweetJSON)
    console.log(tweetData)
    
    db.Tweet.create(tweetData, (err, newTweet) => {
        if (err) console.log('Error at getTweets create', err);
        console.log(newTweet)
      })

  })
  .catch((err) => console.log(err))

// Make a server call (for one tweet for now)

//revise data into format needed

//run through db create route