const express = require('express');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT;
const routes = require('./routes')

// To be moved into the actual function, but this works for now!
// const {tweetFilter} = require('./utils/tweetFilter');
// const {fiveTweets} = require('./utils/fiveTweets');
// const filteredTweets = fiveTweets.filter(tweetFilter)
// console.log(filteredTweets)

// Body Parser
app.use(express.urlencoded({extended: false}));


app.use('/api/v1/tweets', routes.tweets);

//404 Route
app.get('*', (req, res) => {
  res.send('<h1>404 Page Not Found</h1>')
})

app.listen(PORT, ()=> {
  console.log(`Listening on Port ${PORT}`)
})