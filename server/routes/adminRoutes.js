const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();
const {
  getAllAdmins, getAdminById, registerAdmin, deleteAdmin, logIn,
} = require('../controllers/adminController');

router.get('/', adminController.getAllAdmins);
router.get('/getoken', adminController.getTokenAndConfig);
router.get('/:id', adminController.getAdminById);
router.post('/', adminController.registerAdmin); // redirect route to /login
router.post('/logIn', adminController.logIn);
router.delete('/:username', adminController.deleteAdmin);

module.exports = router;
