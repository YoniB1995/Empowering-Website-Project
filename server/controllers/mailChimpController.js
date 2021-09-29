const ErrorResponse = require("../utils/errorResponse");
const { MailchimpMarketingModel } = require("../models/mailChimpModel");
const md5 = require("md5");
const { validMember } = require("../models/memberModel");

const { AUDIENCE_ID } = process.env;

const createMember = async (req, res, next) => {
	try {
		const { error } = validMember(req.body); // try to validate
		if (error) {
		res.json({ error: error.details[0].message })
		}
	} catch (e) {
		next(new ErrorResponse("bad request", 301));
	}
	try {
		await MailchimpMarketingModel.lists
			.addListMember(AUDIENCE_ID, {
				email_address: req.body.Email,
				status: "pending",
			})
			.then((response) =>
				res.status(200).json({ message: "user added", response })
			)
			.catch((err) => res.json({ text: JSON.parse(err.response.text).detail }));
	} catch (e) {
		next(new ErrorResponse(e, 500));
	}
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
		const hashSubcriber = md5(req.params.Email);

		await MailchimpMarketingModel.lists
			.setListMember(AUDIENCE_ID, hashSubcriber, {
				email_address: req.body.Email,
				status_if_new: "subscribed",
			})
			.then((response) => res.status(200).json({ response }))
			.catch((err) => res.json({ text: JSON.parse(err.response.text).detail }));
	} catch (e) {
		next(new ErrorResponse(e, 500));
	}
};

const getAllMembers = async (req, res, next) => {
	try {
		const members = await MailchimpMarketingModel.lists.getListMembersInfo(
			AUDIENCE_ID
		);
		if (!members) {
			res.status(200).json("no members exist");
		}
		res.status(200).json({ members });
	} catch (e) {
		next(new ErrorResponse("server error", 500));
	}
};

const getMember = async (req, res, next) => {
	const subscriberHash = md5(req.params.Email);
	const { Email } = req.params;
	try {
		const { error } = validMember({ Email }); // try to validate
		if (error) {
			next(new ErrorResponse({ error: error.details[0].message }, 301));
		}
	} catch (e) {
		next(new ErrorResponse("bad request", 301));
	}
	try {
		const member = await MailchimpMarketingModel.lists.getListMember(
			AUDIENCE_ID,
			subscriberHash
		);

		res.status(200).json({ member });
	} catch (e) {
		next(new ErrorResponse("server error", 500));
	}
};

const deleteMember = async (req, res, next) => {
	const subscriberHash = md5(req.params.Email);
	const { Email } = req.params;
	try {
		const { error } = validMember({ Email }); // try to validate
		if (error) {
			next(new ErrorResponse({ error: error.details[0].message }, 301));
		}
	} catch (e) {
		next(new ErrorResponse("bad request", 301));
	}
	await MailchimpMarketingModel.lists
		.deleteListMemberPermanent(AUDIENCE_ID, subscriberHash)
		.then((response) => res.status(200).json({ message: "user deleted" }))
		.catch((err) =>
			next(
				new ErrorResponse(
					res.json({ text: JSON.parse(err.response.text).detail })
				),
				500
			)
		);
};

module.exports = {
	createMember,
	getAllMembers,
	getMember,
	updateMember,
	deleteMember,
};
