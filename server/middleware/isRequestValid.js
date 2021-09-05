const ErrorResponse = require('../utils/errorResponse');

const isRequestValid = (req, res, next) => {
  const {
    title, description, quantity, price, variants,
  } = req.body;
  if (!title || !description || !quantity || !price || !variants) {
    console.log('Hey Im middleware between post request ');
    res.send('one of your fields is empty');
    return;
  }
  next();
};

module.exports = isRequestValid;
