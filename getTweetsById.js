const axios = require('axios');
require('dotenv').config();
const db = require('./models/index');

const config = {
  headers: {
    Authorization: `Bearer ${process.env.twitterAuthToken}`
  }
}

module.exports = {
    getTweets: function (userId){

        axios.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=${userId}&include_rts=false&count=20`, config)
          .then((res) => {
        
            const tweetData = {};
        
            for(let i = 0; i < res.data.length; i++){
                tweetData.id = res.data[i].id;
                tweetData.text = res.data[i].text;
                tweetData.created_at = res.data[i].created_at;
                tweetData.username = res.data[i].user.screen_name;
                tweetData.full_name = res.data[i].user.name;
                tweetData.user_img = res.data[i].user.profile_image_url;
                
        
                db.Tweet.create(tweetData, (err, newTweet) => {
                    if (err) console.log('Error at getTweets create', err);
                    // console.log(newTweet)

                    db.Candidate.findById(tweetData.id, (err, foundCandidate) => {
                        if(err) return console.log(err);

                        foundCandidate.tweets.push(newTweet);
                        foundCandidate.save((err, savedCanidate) => {
                            if (err) return console.log(err);
                            console.log(savedCanidate);
                        })
                    })
                  })
            }
          })
          .catch((err) => console.log(err))
    }
};