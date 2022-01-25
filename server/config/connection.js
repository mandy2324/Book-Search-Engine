const mongoose = require('mongoose');
const string= process.env.MONGODB_URI || 'mongodb://localhost/googlebooks'
mongoose.connect(string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

