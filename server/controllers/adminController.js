/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
const bcrypt = require('bcrypt');
const { validAdmin } = require('../validation/adminValidation');
const ErrorResponse = require('../utils/errorResponse');
const adminModel = require('../models/adminModel');

async function logIn(req, res, next) {
  try {
    const validBody = validAdmin(req.body.user);
    if (validBody.error) {
      return next(new ErrorResponse(`${validBody.error.details[0].message}`, 400));
    }
    const user = await adminModel.findOne(
      { email: req.body.user.email },
      (error) => {
        if (error) throw error;
      },
    );
    if (!user) {
      res.json({ msg: 'Email not found' });
    }
    const PassValid = await bcrypt.compare(req.body.user.password, user.password);
    if (!PassValid) {
      return next(new ErrorResponse('Wrong Password !', 401));
    }
    // const newToken = genToken(user.id);
    user.password = '****';
    res.json({ user });
  } catch (error) {
    console.log(error);
  }
}

const getAllAdmins = async (req, res, next) => {
  try {
    const admins = await adminModel.find({});

    res.json(admins);
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse('Server Error !', 500));
  }
};

const getAdminById = async (req, res, next) => {
  try {
    const admin = await adminModel.findById(req.params.id);

    res.json(adminModel);
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse('Server Error !', 500));
  }
};

const registerAdmin = async (req, res, next) => {
  try {
    await bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.user.password, salt, (error, hash) => {
        if (error) throw error;
        req.body.user.password = hash;
        adminModel.create(req.body.user, (err, result) => {
          if (err) throw err;
          result.password = '*********';
          res.json(result);
        });
      });
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse('Email already in system order another problem', 301));
  }
};

const deleteAdmin = async (req, res, next) => {
  const { username } = req.body;
  try {
    const user = await adminModel.deleteById(req.params.username === username && req.params.username);

    if (!user) {
      return next(new ErrorResponse('there isn`t a username like this name', 301));
    }

    console.log(user);
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse('Server Error !', 500));
  }
};

module.exports = {
  getAllAdmins,
  getAdminById,
  registerAdmin,
  deleteAdmin,
  logIn,
};
