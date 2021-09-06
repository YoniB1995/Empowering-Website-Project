const { validUser, userModel } = require("../models/userModel");

const ErrorResponse = require("../utils/errorResponse");

const getUsers = async (req, res, next) => {
	try {
		const users = await userModel.find({});
		if (!users) {
			console.log("no users in the collection");
			next(new ErrorResponse("bad request", 301));
		}
		res.status(200).json({ users });
	} catch (e) {
		next(new ErrorResponse("server error", 500));
	}
};

const createUser = async (req, res, next) => {
	try {
		const { error } = validUser(req.body); // try to validate
		if (error) {
			next(new ErrorResponse({ error: error.details[0].message }, 301));
		}
	} catch (e) {
		next(new ErrorResponse("bad request", 301));
	}

	try {
		const users = await userModel.insertMany(req.body);
		if (!users) {
			console.log("no users in the collection");
		}
	} catch (e) {
		next(new ErrorResponse("server error", 500));
	}
};

const updateUser = async (req, res, next) => {
	try {
		const { error } = validUser(req.body); // try to validate
		if (error) {
			next(new ErrorResponse({ error: error.details[0].message }, 301));
		}
	} catch (e) {
		next(new ErrorResponse("bad request", 301));
	}
	try {
		console.log(req.params.email, req.body);
		const updatedUser = await userModel.findOneAndUpdate(
			{ Email: req.params.email },
			{ Email: req.body.Email }
		);
		if (!updatedUser) {
			next(new ErrorResponse("user email not found", 301));
		}
	} catch (e) {
		console.log("cannot find user ");
		next(new ErrorResponse("server error", 500));
	}
};

module.exports = {
	getUsers,
	createUser,
	updateUser,
};
