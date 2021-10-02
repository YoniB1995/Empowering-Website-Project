const { teamModel } = require("../../models/teamModel");
class teamMembership {
	constructor() {
		this.user = teamModel;
	}
	async create(fullname, description, image, role, lang) {
		return this.user.create({
			fullname,
			description,
			image,
			role,
			lang,
		});
	}
	async getUser(id) {
		return this.user.findOne({ id });
	}

	async deleteUser(_id) {
		const result = await this.user.findByIdAndDelete({ _id });
		console.log(result);
		return result;
	}
}

module.exports = teamMembership;
