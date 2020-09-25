const mongoose = require('mongoose');

const updateSchema = mongoose.Schema({
  lastUpdate: Date
})

const LastUpdate = mongoose.model('LastUpdate', updateSchema);

module.exports = LastUpdate;