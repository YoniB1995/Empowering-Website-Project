const ErrorResponse = require('../utils/errorResponse');

const isRequestValid = (req, res, next) => {
  const {  Title, Descrption, Image,Quantity, Price,
  } = req.body;
  if (!Title || !Descrption ||Image || !Price|| !Quantity ) {
    console.log('Hey Im middleware between post request ');
    res.send('one of your fields is empty');
    return;
  }
  next();
};

module.exports = isRequestValid;
