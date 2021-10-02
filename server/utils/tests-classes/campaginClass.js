const { campaginModel } = require("../../models/campaginModel");
class campaginClass {
	constructor() {
		this.campagin = campaginModel;
	}
	async getCampaignsSorted() {
		return await this.campagin.find({});
	}
}

module.exports = campaginClass;
