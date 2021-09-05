const express = require("express");
const userController = require("../controllers/userController");
const newsLetterController = require("../controllers/newsLetterController");

const userRouter = express.Router();

userRouter.get("/getUsers", userController.getUsers);
userRouter.post(
	"/createUser",
	userController.createUser,
	newsLetterController.createMember
);

module.exports = userRouter;
