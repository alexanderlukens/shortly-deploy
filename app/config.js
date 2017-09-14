const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds015478.mlab.com:15478/shortly-deploy', {useMongoClient:true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("new DB connection successful")
});

module.exports = db;
