const { validMember, memberModel } = require("../models/memberModel");

const ErrorResponse = require("../utils/errorResponse");

const getMembers = async (req, res, next) => {
	try {
		const members = await memberModel.find({});
		if (!members) {
			console.log("no members in the collection");
			next(new ErrorResponse("bad request", 301));
		}
		res.status(200).json({ members });
	} catch (e) {
		next(new ErrorResponse("server error", 500));
	}
};

const createMember = async (req, res, next) => {
	try {
		const { error } = validMember(req.body); // try to validate
		if (error) {
			next(new ErrorResponse({ error: error.details[0].message }, 301));
		}
	} catch (e) {
		next(new ErrorResponse("bad request", 301));
	}

	try {
		const members = await memberModel.insertMany(req.body);
		if (!members) {
			console.log("no members in the collection");
		}
		next();
		res.status(200).json({ message: "user added to database" });
	} catch (e) {
		next(new ErrorResponse("server error", 500));
	}
};

const deleteMember = async (req, res, next) => {
	try {
		const deletedMember = await memberModel.findOneAndDelete({
			Email: req.params.email,
		});
		if (!deletedMember) {
			next(new ErrorResponse("Member email not found", 301));
		}
	} catch (e) {
		console.log("cannot find Member ");
		next(new ErrorResponse("server error", 500));
	}
	next();
	res.status(200).json({ message: "member deleted" });
};

const updateMember = async (req, res, next) => {
	try {
		const { error } = validMember(req.body); // try to validate
		if (error) {
			next(new ErrorResponse({ error: error.details[0].message }, 301));
		}
	} catch (e) {
		next(new ErrorResponse("bad request", 301));
	}
	try {
		const updateMember = await memberModel.findOneAndUpdate(
			{
				Email: req.params.email,
			},
			req.body
		);
		if (!updateMember) {
			next(new ErrorResponse("Member email not found", 301));
		}
	} catch (e) {
		console.log("cannot find Member ");
		next(new ErrorResponse("server error", 500));
	}
	next();
	res.status(200).json({ message: "member deleted" });
};

module.exports = {
	getMembers,
	createMember,
	deleteMember,
	updateMember,
};
