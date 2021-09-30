const { teamModel } = require("../../models/teamModel");
class teamMembership {
  constructor() {
    this.user = teamModel;
  }
  async create(fullname, description,image,role,lang) {
    return this.user.create({
      fullname,
      description,
      image,
      role,
      lang
    });
  }
  async getUser(id) {
    return this.user.findOne({ id });
  }
}

module.exports = teamMembership;
