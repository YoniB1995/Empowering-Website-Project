const { MailchimpMarketingModel } = require("../models/mailChimpModel");
const { validCampagin, campaginModel } = require("../models/campaginModel");
const ErrorResponse = require("../utils/errorResponse");

const getCampaignsSorted = async (req, res, next) => {
	try {
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
				id: campagin.id,
				name: campagin.settings.title,
				status: campagin.status,
			};
		});
		res.status(200).json({ sortedCampagins });
	} catch (e) {
		next(new ErrorResponse("server error", 500));
	}
};

const getCampaignByTitle = async (req, res, next) => {
	try {
		const campaignsList = await MailchimpMarketingModel.campaigns.list();
		const { title } = req.params;

		const chosenCampaigns = campaignsList.campaigns.filter(
			(campagin) =>
				campagin.settings.title === title && campagin.status === "sent"
		);
		console.log(chosenCampaigns);
		if (!chosenCampaigns || chosenCampaigns.length === 0) {
			next(new ErrorResponse("Campaign not found", 301));
		}

		try {
			const { id } = chosenCampaigns[0];
			const { report_summary } = await MailchimpMarketingModel.campaigns.get(
				id
			);
			res.json({ report_summary }).status(200);
		} catch (e) {
			next(new ErrorResponse("server error", 500));
		}
	} catch (e) {
		next(new ErrorResponse("No campagin found", 301));
	}
};

const getCampaignData = async (req, res, next) => {
	try {
		const { campagin } = req.params;
	} catch (e) {
		next(new ErrorResponse("no campagin sent to server", 301));
	}
	try {
		const { report_summary } = await MailchimpMarketingModel.campaigns.get(
			"71e826f0e6"
		);
		res.json({ report_summary }).status(200);
	} catch (e) {
		console.log("Err");
	}
};

module.exports = {
	getCampaignsSorted,
	getCampaignByTitle,
	getCampaignData,
};
