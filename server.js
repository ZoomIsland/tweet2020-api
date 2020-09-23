const express = require('express');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT;
const routes = require('./routes')

app.use('/api/v1/tweets', routes.tweets);



app.listen(PORT, ()=> {
  console.log(`Listening on Port ${PORT}`)
})