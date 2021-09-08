const express = require("express");
const memberController = require("../controllers/memberController");
const mailChimpController = require("../controllers/mailChimpController");

const memberRouter = express.Router();

memberRouter.get("/getMembers", memberController.getMembers);
memberRouter.post(
	"/createMember",
	memberController.createMember,
	mailChimpController.createMember
);

memberRouter.delete("/deleteMember/:email", memberController.deleteMember);

module.exports = memberRouter;
