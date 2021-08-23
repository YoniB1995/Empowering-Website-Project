/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
const bcrypt = require('bcrypt');

const adminModel = require('../models/admin');
const { adminValidation } = require('../validation/adminValidation');

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

const logIn = async (req, res) => {
  try {
    const validBody = adminValidation(req.body.user);
    if (validBody.error) {
      return res.status(400).json(validBody.error.details);
    }
    const user = await adminModel.findOne({ email: req.body.user.email });
    if (!user) {
      return res.json({ message: 'User not found' });
    }
    const passwordValid = await bcrypt.compare(
      req.body.user.password,
      user.password,
    );
    if (!passwordValid) {
      return res.json({ message: 'the password was worng' });
    }
    res.json({ message: ' welcome to website', user });
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};
const registerAdmin = async (req, res) => {
  try {
    await bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.user.password, salt, (error, hash) => {
        if (error) throw error;
        req.body.user.password = hash;
        adminModel.create(req.body.user, (error, result) => {
          if (error) throw error;
          result.password = '******';
          res.json(result);
        });
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
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
};
