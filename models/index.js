const mongoose = require('mongoose');

// need to fix below, using .env
const connectionString = "mongodb://localhost:27017/tweet2020";
const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(connectionString, configOptions)
  .then(() => console.log('MongoDB successfully connected!'))
  .catch((err) => console.error(`MongoDB connection error: ${err}`))

module.exports = {
  Tweet: require('./Tweet'),
  Candidate: require('./Candidate'),
  LastUpdate: require('./LastUpdate')
}