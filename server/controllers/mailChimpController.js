const ErrorResponse = require("../utils/errorResponse");
const { MailchimpMarketingModel } = require("../models/mailChimpModel");
const md5 = require("md5");
const { validMember } = require("../models/memberModel");

const { AUDIENCE_ID } = process.env;
const { API_KEY } = process.env;

const createMember = async (req, res, next) => {
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
		const hashSubcriber = md5(req.params.Email);
		const member = await MailchimpMarketingModel.lists
			.updateListMember(AUDIENCE_ID, hashSubcriber, {
				email_address: Email,
				status: "pending",
			})
			.then((response) =>
				res.status(200).json({ message: "user added", response })
			)
			.catch((err) => res.send(err));
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

		const updateMember = await MailchimpMarketingModel.lists
			.setListMember(AUDIENCE_ID, hashSubcriber, {
				email_address: req.body.Email,
				status_if_new: "subscribed",
			})
			.then((response) => res.status(200).json({ response }))
			.catch((err) => res.send(err.response.text));
	} catch (e) {
		next(new ErrorResponse(e, 500));
	}
};

const getCampaignsFiltered = async (req, res, next) => {
	try {
		const campaignsList = await MailchimpMarketingModel.campaigns.list();

		if (!campaignsList) {
			next(new ErrorResponse("no campaign found", 301));
			return;
		}
		const campaigns = campaignsList.campaigns.sort(
			(a, b) => new Date(b.create_time) - new Date(a.create_time)
		);
		res.status(200).json({ campaigns: campaigns });
	} catch (e) {
		console.log(e);
		next(new ErrorResponse("server error", 500));
	}
};

const getCampaignByTitle = async (req, res, next) => {
	try {
		const campaignsList = await MailchimpMarketingModel.campaigns.list();
		const { title } = req.params;

		const chosenCampaign = campaignsList.campaigns.filter(
			(campaign) => campaign.settings.title === title
		);
		if (!chosenCampaign) {
			next(new ErrorResponse("Campaign not found", 301));
			return;
		}
		res.status(200).json({ campaign: chosenCampaign });
	} catch (e) {
		next(new ErrorResponse("server error", 500));
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
		.catch((err) => next(new ErrorResponse(err, 500)));
};

module.exports = {
	createMember,
	getAllMembers,
	getMember,
	getCampaignByTitle,
	getCampaignsFiltered,
	updateMember,
	deleteMember,
};
