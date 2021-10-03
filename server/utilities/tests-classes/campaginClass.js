const { MailchimpMarketingModel } = require("../../models/mailChimpModel");
const { AUDIENCE_ID } = process.env;
class MailchimpMarketingModelClass {
	constructor() {
		this.MailchimpMarketingModel = MailchimpMarketingModel;
	}
	async getCampaignsSorted() {
		console.log("made it");
		return await this.MailchimpMarketingModel.lists.getListMembersInfo(AUDIENCE_ID);
	}
}

module.exports = MailchimpMarketingModelClass;
