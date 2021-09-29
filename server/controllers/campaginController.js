const { MailchimpMarketingModel } = require("../models/mailChimpModel");
const { validCampagin, campaginModel } = require("../models/campaginModel");
const ErrorResponse = require("../utils/errorResponse");

const getCampaignsSorted = async (req, res, next) => {
	try {	
		const { error } = validCampagin(req.body); // try to validate
	if (error) {
	res.json({ error: error.details[0].message })
	}
		const campaignsList = await MailchimpMarketingModel.campaigns.list();

		if (!campaignsList) {
			next(new ErrorResponse("no campaign found", 301));
			return;
		}
		const campaigns = campaignsList.campaigns.sort(
			(a, b) => new Date(b.create_time) - new Date(a.create_time)
		);
		const sortedCampagins = campaigns.map((campagin) => {
			return {
				url: campagin.long_archive_url,
				date: campagin.create_time,
			};
		});
		res.status(200).json({ sortedCampagins });
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
		res.status(200).json({ chosenCampaign });
	} catch (e) {
		next(new ErrorResponse("server error", 500));
	}
};

const getDataFromMailChimp = (req, res, next) => {
	try {
		console.log(req.body);
	} catch (e) {
		console.log(e);
	}
};

module.exports = {
	getCampaignsSorted,
	getCampaignByTitle,
	getDataFromMailChimp,
};
