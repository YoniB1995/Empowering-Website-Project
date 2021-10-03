const express = require('express');
const adminController = require('../controllers/adminController');
const passport = require('passport')
const adminRouter = express.Router();

// @ GET request to get all admins.
// @ URL http://localhost:5000/admin 
adminRouter.get('/', adminController.getAllAdmins);

// @ GET request to get one admin.
// @ URL http://localhost:5000/admin/:id 
adminRouter.get('/getadmin/:id', adminController.getAdminById);

// @ POST request to create a new admin.
// @ URL http://localhost:5000/admin/register 
adminRouter.post('/register', adminController.registerAdmin); 

// @ POST request to login admin.
// @ URL http://localhost:5000/admin/login 
adminRouter.post('/login', adminController.loginAdmin);

// @ PUT request to update existing admin details.
// @ URL http://localhost:5000/admin/update/:id 
adminRouter.put('/update/:id', adminController.updatedAdmin);

// @ DELETE request to delete existing admin.
// @ URL http://localhost:5000/admin/delete/:id 
adminRouter.delete('/delete/:id', adminController.deleteAdmin);

// @ GET request to get to a protected route with admin.
// @ URL http://localhost:5000/admin/protected
adminRouter.get('/protected', passport.authenticate('jwt',{session: false}), (req,res,next)=>{
    res.status(200).json({success: true,message:"You are authorized!"})
});
   
module.exports = adminRouter;
   