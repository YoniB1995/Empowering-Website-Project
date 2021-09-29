/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
require('dotenv').config()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { validAdmin } = require('../validation/adminValidation');
const ErrorResponse = require('../utils/errorResponse');
const {adminModel} = require('../models/adminModel');
// const { validAdmin, adminModel} = require('../models/adminModel');



const loginAdmin = async (req, res) => {
  try {
    const validBody = validAdmin(req.body.user);
    if (validBody.error) {
      return next(new ErrorResponse(`${validBody.error.details[0].message}`, 400));
    }
    const email = req.body.email;
    const password = req.body.password;
    await adminModel.findOne({email}).then(admin => {
      if (!admin){
        return res.status(404).json({email: "User not found"});
      }
    
    bcrypt.compare(password,admin.password).then(isMatch =>{
      if (isMatch){
        const payload = {id: admin._id, email:admin.email, password: admin.password };

        jwt.sign(
          payload,
          process.env.SECRET_KEY,
          {expiresIn: 3600}, 
          (err,token)=> {
            res.json({
              success: true,
              token: "Bearer " + token,
              expiresTokenIn: "60min"
            })
          }
        );
       }else {
        return res.status(400).json({password: 'Password incorrect'});
      }
    })
  
  
  })
  } catch (error) {
    console.log(error);
  }
};

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
 if (!admin) {
      return next(new ErrorResponse('Admin not exists!',404))
    }
    res.status(200).json({success:true,admin:admin});
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse('Server Error !', 500));
  }
};

const registerAdmin = async (req, res, next) => {
  try {
    await adminModel.findOne({email: req.body.email}).then(admin => {
      if (admin) {
        return res.status(400).json({email: "Email already exists"});
      } else {
        const newAdmin = new adminModel({
          username: req.body.username,
          email : req.body.email,
          password: req.body.password
        });
     
    bcrypt.genSalt(10,  (err, salt) => {
       bcrypt.hash(newAdmin.password, salt, (error, hash) => {
        if (error) throw error;
        newAdmin.password = hash;
        newAdmin.save().then(data => res.json(data)).catch(err => console.log(err))
        

      });
    });
     }
    })
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse('Email already in system order another problem', 301));
  }
};

const deleteAdmin = async (req, res, next) => {
  const {email} = req.body
  try {
    const deletedUser = await adminModel.deleteOne(
     {email:email}
    );

    if (!deletedUser) {
      return next(new ErrorResponse('there isn`t a username like this name', 301));
    }

    res.status(200).json({success:true,message:"Admin Deleted!",deletedAdmin: deletedUser})
  } catch (error) {
    res.status(200).json({success:false,deletedAdmin: "Not Deleted! Server Error"})
    return next(new ErrorResponse('Server Error !', 500));
  }
};

module.exports = {
  getAllAdmins,
  getAdminById,
  registerAdmin,
  deleteAdmin,
  loginAdmin,
};
