const mongoose = require('mongoose');

const { CONNECTION_URL } = process.env;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.log('mongoose connect successed'))
  .catch((err) => console.log('err:', err));

const db = mongoose.connection;
module.exports = db;
