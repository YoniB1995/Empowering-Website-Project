const { adminModel } = require("../../models/adminModel");
class adminClass {
  constructor() {
    this.admin = adminModel;
  }
  async createNewAdmin(email,password) {
    return this.admin.create({
      email,
      password
    });
  }
  
}

module.exports = adminClass;
