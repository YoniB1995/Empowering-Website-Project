const mailChimp = require("express").Router();
const mailChimpController = require("../controllers/mailChimpController");

mailChimp.post("/createMember", mailChimpController.createMember);
mailChimp.get("/getAllMembers", mailChimpController.getAllMembers);
mailChimp.get("/getMember/:Email", mailChimpController.getMember);
mailChimp.get("/getCampaign/:title", mailChimpController.getCampaignByTitle);
mailChimp.get("/getCampaignFiltered", mailChimpController.getCampaignsFiltered);

module.exports = mailChimp;
