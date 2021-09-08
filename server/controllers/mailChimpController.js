const ErrorResponse = require("../utils/errorResponse");
const MailchimpMarketingModel = require("../models/mailChimpModel");

const md5 = require("md5");

const { AUDIENCE_ID } = process.env;

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

const createMember = async (req, res, next) => {
	const subscriberHash = md5(req.body.Email);
	try {
		const member = await MailchimpMarketingModel.lists.getListMember(
			AUDIENCE_ID,
			subscriberHash
		);
		if (!member) {
			next(new ErrorResponse("your email is not valid", 301));
		}
		res.status(200).json({ message: "user added", response });
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

module.exports = {
	createMember,
	getAllMembers,
	getMember,
	getCampaignByTitle,
	getCampaignsFiltered,
};
