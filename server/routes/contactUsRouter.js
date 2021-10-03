const contactUsRouter = require("express").Router();

const contactUsController = require("../controllers/contactUsController");

// @ GET request to get all Campaigns.
// @ URL http://localhost:5000/contactUs/getAllContactInformation
contactUsRouter.get(
	"/getAllContactInformation",
	contactUsController.getAllContactInformation
);
// @ POST request to create new contactUs.
// @ URL http://localhost:5000/contactUs/createContactInformation
contactUsRouter.post(
	"/createContactUs",
	contactUsController.createContactInformation
);
// @ PUT request to update contact info.
// @ URL http://localhost:5000/contactUs/updateContactUs/:id
contactUsRouter.put(
	"/updateContactUs/:id",
	contactUsController.updateContactInformation
);
// @ GET request to get contact info.
// @ URL http://localhost:5000/contactUs/getContactInformation/:id
contactUsRouter.get(
	"/getContactInformation/:id",
	contactUsController.getContactInformation
);
// @ DELETE request to get contact info.
// @ URL http://localhost:5000/contactUs/deleteContactUs/:id
contactUsRouter.delete(
	"/deleteContactUs/:id",
	contactUsController.deleteContactInformation
);

module.exports = contactUsRouter;
