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
userRouter.put("/updateUser/:email", userController.updateUser);
userRouter.delete("/deleteUser/:email", userController.deleteUser);

module.exports = userRouter;
