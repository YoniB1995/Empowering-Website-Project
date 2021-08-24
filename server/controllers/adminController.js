/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validAdmin } = require('../validation/adminValidation');
const adminModel = require('../models/adminModel');
const { genToken } = require('../middleware/token');

const getTokenAndConfig = async (req, res) => {
  let token = req.header('x-api-key');
  if (!token) {
    res.status(401).json({ msg: ' you must send token' });
  }
  try {
    let decodeToken = jwt.verify(token, 'asalefDeveloper');
    let user = await adminModel.findOne({ _id: decodeToken.id });
    res.json({ massage: 'all ok', user });
  } catch (error) {
    res.status(401).json({ massage: 'token invalid or expired' });
  }
};

const logIn = async (req, res) => {
  try {
    const validBody = validAdmin(req.body.user);
    if (validBody.error) {
      return res.status(400).json(validBody.error.details[0].message);
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
    const PassValid = await bcrypt.compare(
      req.body.user.password,
      user.password,
    );
    if (!PassValid) {
      return res.json({ msg: 'password worng found' });
    }
    user.password = '****';
    let adminToken = genToken(user.id);
    localStorage.setItem({ token: adminToken });
    res.json({ token: adminToken, user });
  } catch (error) {
    console.log(error);
  }
};

const getAllAdmins = async (req, res) => {
  try {
    const admins = await adminModel.find({});

    res.json(admins);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAdminById = async (req, res) => {
  try {
    const admin = await adminModel.findById(req.params.id);

    res.json(adminModel);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const registerAdmin = async (req, res) => {
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
    res.json({ msg: 'Email already in system order another problem' });
  }
};

const deleteAdmin = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await adminModel.deleteById(
      req.params.username === username && req.params.username,
    );

    if (!user) {
      console.log('there isnt a username like this name');
    }

    console.log(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllAdmins,
  getAdminById,
  registerAdmin,
  deleteAdmin,
  logIn,
  getTokenAndConfig,
};
