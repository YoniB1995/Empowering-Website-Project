const express = require('express');
const adminController = require('../controllers/adminController');
const passport = require('passport')
const adminRouter = express.Router();

adminRouter.get('/', adminController.getAllAdmins);
adminRouter.get('/getadmin/:id', adminController.getAdminById);
adminRouter.post('/register', adminController.registerAdmin); 
adminRouter.post('/login', adminController.loginAdmin);
adminRouter.get('/protected', passport.authenticate('jwt',{session: false}), (req,res,next)=>{
    res.status(200).json({success: true,message:"You are authorized!"})
});
adminRouter.delete('/delete', adminController.deleteAdmin);

module.exports = adminRouter;
