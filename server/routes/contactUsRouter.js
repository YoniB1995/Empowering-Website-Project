const contactUsRouter = require('express').Router();
const contactUsModel = require('../models/contactUsModel');

contactUsRouter.get('/', contactUsModel.getAllDetails);

module.exports = contactUsRouter;
