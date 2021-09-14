const express = require("express");
const memberController = require("../controllers/memberController");
const mailChimpController = require("../controllers/mailChimpController");

const memberRouter = express.Router();

memberRouter.get("/getMembers", memberController.getMembers);
memberRouter.post(
	"/createMember",
	memberController.createMember
	// mailChimpController.createMember
);
memberRouter.put(
	"/updateMember/:Email",
	memberController.updateMember
	// mailChimpController.updateMember
);

memberRouter.delete(
	"/deleteMember/:Email",
	memberController.deleteMember
	// mailChimpController.deleteMember
);

module.exports = memberRouter;
