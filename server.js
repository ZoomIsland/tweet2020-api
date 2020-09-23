const express = require('express');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT;


app.get('/', (req, res) => {
  res.send("This worked")
})




app.listen(PORT, ()=> {
  console.log(`Listening on Port ${PORT}`)
})