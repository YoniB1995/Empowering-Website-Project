const express = require("express");
const userController = require("../controllers/userController");
const newsLetterController = require("../controllers/newsLetterController");

const router = express.Router();

router.get("/getUsers", userController.getUsers);
router.post(
	"/createUser",
	userController.createUser,
	newsLetterController.createMember
);

module.exports = router;
