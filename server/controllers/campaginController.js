const { MailchimpMarketingModel } = require("../models/mailChimpModel");
const { validCampagin, campaginModel } = require("../models/campaginModel");
const ErrorResponse = require("../utils/errorResponse");

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
		const filterCampagins = campaigns.map((campagin) => {
			return { url: campagin.long_archive_url, date: campagin.create_time };
		});
		res.status(200).json({ filterCampagins });
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

module.exports = {
	getCampaignsFiltered,
	getCampaignByTitle,
};
