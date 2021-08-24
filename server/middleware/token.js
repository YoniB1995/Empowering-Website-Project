const jwt = require('jsonwebtoken');

exports.genToken = (userId) => {
  let token = jwt.sign({ id: userId }, 'asalefDeveloper', {
    expiresIn: '60mins',
  });
  return token;
};
