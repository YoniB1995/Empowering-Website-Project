const contactUsRouter = require('express').Router();
const contactUsModel = require('../models/contactUsModel');
const contactUsController = require('../controllers/contactUsController');

contactUsRouter.get('/', contactUsController.getAllContactInformation);
contactUsRouter.post('/createContactUs', contactUsController.createContactInformation);
contactUsRouter.put('/updateContactUs/:id', contactUsController.updateContactInformation);
contactUsRouter.delete('/deleteContactUs/:id', contactUsController.deleteContactInformation);

module.exports = contactUsRouter;
