<<<<<<< HEAD
=======
/* eslint-disable no-useless-escape */
>>>>>>> yoni-branch
/* eslint-disable new-cap */
const mongoose = require('mongoose');

const schema = mongoose.Schema;
const adminSchema = new schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: [true, 'Please provide a password'],
    minlength: 6,
    select: false,
  },
  email: {
    type: String,
    require: [true, 'Please provide a email'],
    unique: true,
    match: [
<<<<<<< HEAD
      // eslint-disable-next-line no-useless-escape
=======
>>>>>>> yoni-branch
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email',
    ],
  },
});

module.exports = mongoose.model('admin', adminSchema);
