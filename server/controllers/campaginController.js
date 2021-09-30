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

const getCampaignByTitle = async (req, res, next) => {
	try {
		const campaignsList = await MailchimpMarketingModel.campaigns.list();
		const { title } = req.params;

		const chosenCampaigns = campaignsList.campaigns.filter(
			(campagin) =>
				campagin.settings.title === title && campagin.status === "sent"
		);
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

const getDataFromMailchimp = async (req, res, next) => {
	try {
		console.log(req.body);
		// const dbCampagin = await campaginModel.findById(req.body.id);
		// const mailChimpCampagins = await MailchimpMarketingModel.campaigns.list();
		// if (dbCampagin) {
		// 	mailChimpCampagins.map((campagin) => {
		// 		return {
		// 			archive_url: campagin.archive_url,
		// 			id: campagin.settings.title,
		// 			send_time: campagin.send_time,
		// 		};
		// 	});
		// 	const updatedList = await campaginModel.insertMany(mailChimpCampagins);
		// 	res.json({ updatedList }).status(200);
		// }
		// const { send_time, id, archive_url } = req.body;
		// const newCampagin = await campaginModel.insertMany({
		// 	send_time,
		// 	id,
		// 	archive_url,
		// });
	} catch (e) {
		// console.log(e);
		res.send("error");
	}
};

module.exports = {
	getCampaignsSorted,
	getCampaignByTitle,
	getDataFromMailchimp,
};
