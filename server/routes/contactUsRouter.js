const contactUsRouter = require('express').Router();
const contactUsModel = require('../models/contactUsModel');
const contactUsController = require('../controllers/contactUsController');

contactUsRouter.get('/', contactUsController.getAllContactInformation);
contactUsRouter.post('/createContactUs', contactUsController.createContactInformation);
contactUsRouter.put('/updateContactUs', contactUsController.updateContactInformation);
contactUsRouter.delete('/deleteContactUs', contactUsController.deleteContactInformation);

module.exports = contactUsRouter;
