const mongoose = require('mongoose');
const string= process.env.MONGODB_URI || 'mongodb://localhost/googlebooks'
console.log(string)
mongoose.connect(string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

