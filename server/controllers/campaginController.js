const { MailchimpMarketingModel } = require("../models/mailChimpModel");
const { validCampagin, campaginModel } = require("../models/campaginModel");
const ErrorResponse = require("../utils/errorResponse");

const getCampaignsSorted = async (req, res, next) => {
	try {
		const campaignsList = await MailchimpMarketingModel.campaigns.list();
		if (!campaignsList) {
			next(new ErrorResponse("no campaign found", 301));
		}
		const campaigns = campaignsList.campaigns.sort(
			(a, b) => new Date(b.create_time) - new Date(a.create_time)
		);

		const sortedCampagins = campaigns
			.filter((campagin) => campagin.status === "sent")
			.map((campagin) => {
				return {
					archive_url: campagin.archive_url,
					title: campagin.settings.title,
					date: campagin.send_time,
				};
			});
		res.json({ sortedCampagins }).status(200);
	} catch (e) {
		next(new ErrorResponse("server error", 500));
	}
};

module.exports = {
	getCampaignsSorted,
};
