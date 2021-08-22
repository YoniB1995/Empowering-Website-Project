const express = require('express');

const router = express.Router();
const {
  getAllAdmins, getAdminById, registerAdmin, deleteAdmin,
} = require('../controllers/adminController');

router.get('/', getAllAdmins);
router.get('/:id', getAdminById);
router.post('/', registerAdmin); // redirect route to /login
router.delete('/:username', deleteAdmin);

module.exports = router;
