const { planModel } = require("../../models/planModel");
class planClass {
  constructor() {
    this.plan = planModel;
  }
  async createNewPlan(title,description,markdown,createdAt) {
    return this.plan.create({
      title,
      description,
      markdown,
      createdAt
    });
  }
  
}

module.exports = planClass;
