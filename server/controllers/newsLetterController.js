const mailchimpModel = require("mailchimp-api-v3");
const MailchimpMarketingModel = require("@mailchimp/mailchimp_marketing");
const ErrorResponse = require("../utils/errorResponse");

const { API_KEY } = process.env;
const { AUDIENCE_ID } = process.env;
const { SERVER_PREFIX } = process.env;

MailchimpMarketingModel.setConfig({
	apiKey: API_KEY,
	server: SERVER_PREFIX,
});

const getCampaignsFiltered = async (req, res, next) => {
	try {
		const campaignsList = await MailchimpMarketingModel.campaigns.list();
		let campaigns = campaignsList.campaigns.sort(
			(a, b) => new Date(b.create_time) - new Date(a.create_time)
		);

		if (!campaigns) {
			next(new ErrorResponse("no campaign found", 301));
			return;
		}
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
	const { Email } = req.body;
	let mailchimpObject;

	try {
		mailchimpObject = await new mailchimpModel(API_KEY);
	} catch (e) {
		console.log("API KEY is not available");
	}

	if (!Email) {
		next(new ErrorResponse("please add information to the request error", 400));
	}

	mailchimpObject
		.post(`lists/${AUDIENCE_ID}/members`, {
			email_address: Email,
			status: "pending",
		})

		.then((response) => res.status(200).json({ message: "save in newsletter" }))
		.catch((e) => next(new ErrorResponse(e, 400)));
};

const getAllMembers = (req, res, next) => {
	let mailchimpObject;
	try {
		mailchimpObject = new mailchimpModel(API_KEY);
	} catch (e) {
		console.log("API KEY is not available");
	}
	mailchimpObject
		.get(`/lists/${AUDIENCE_ID}/members`)
		.then((response) => res.status(200).json(response))
		.catch((e) => next(new ErrorResponse(e, 400)));
};

const getMember = (req, res, next) => {
	let mailchimpObject;
	try {
		mailchimpObject = new mailchimpModel(API_KEY);
	} catch (e) {
		console.log("API KEY is not available");
	}

	mailchimpObject
		.get(`lists/${AUDIENCE_ID}/members`)
		.then((audience) => {
			const { email } = req.params;
			const chosenMember = audience.members.filter(
				(member) => email === member.email_address
			);
			console.log(chosenMember);
			res.status(200).json({ chosenMember });
		})
		.catch((e) => next(new ErrorResponse("server error", 500)));
};

module.exports = {
	createMember,
	getAllMembers,
	getMember,
	getCampaignByTitle,
	getCampaignsFiltered,
};
