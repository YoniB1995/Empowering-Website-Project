const contactUsRouter = require("express").Router();

const contactUsController = require("../controllers/contactUsController");

contactUsRouter.get("/", contactUsController.getAllContactInformation);
contactUsRouter.post(
	"/createContactUs",
	contactUsController.createContactInformation
);
contactUsRouter.put(
	"/updateContactUs/:id",
	contactUsController.updateContactInformation
);
contactUsRouter.get(
	"/getContactInformation/:id",
	contactUsController.getContactInformation
);
contactUsRouter.delete(
	"/deleteContactUs/:id",
	contactUsController.deleteContactInformation
);

module.exports = contactUsRouter;
