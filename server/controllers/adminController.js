const adminModel = require('../models/admin');

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
  const { username, email, password } = req.body;
  try {
    const user = await adminModel.create({
      username, email, password,
    });
    // console.log(user)
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteAdmin = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await adminModel.deleteById(req.params.username === username && req.params.username);

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
};
