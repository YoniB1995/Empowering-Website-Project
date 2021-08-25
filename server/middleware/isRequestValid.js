const ErrorResponse = require('../utils/errorResponse');

const isRequestValid = (req, res) => {
  const {
    title, descripation, quantity, price, variants,
  } = req.body;
  if (!title || !descripation || !quantity || !price || !variants) {
    console.log('you dont know ');
    return res.status(400).json({ error: 'your field is empty' });
  }
};

module.exports = isRequestValid;
