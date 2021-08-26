const ErrorResponse = require('../utils/errorResponse');

const isRequestValid = (req, res, next) => {
  const {
    title, descripation, quantity, price, variants,
  } = req.body;
  if (!title || !descripation || !quantity || !price || !variants) {
    console.log('Hey Im middleware between post request ');
    res.send('one of your fields is empty');
    return;
  }
  next();
};

module.exports = isRequestValid;
