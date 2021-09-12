const mailChimp = require("express").Router();
const mailChimpController = require("../controllers/mailChimpController");

mailChimp.post("/createMember/:Email", mailChimpController.createMember);
mailChimp.put("/updateMember/:Email", mailChimpController.updateMember);
mailChimp.delete("/deleteMember/:Email", mailChimpController.deleteMember);

mailChimp.get("/getAllMembers", mailChimpController.getAllMembers);
mailChimp.get("/getMember/:Email", mailChimpController.getMember);
mailChimp.get("/getCampaign/:title", mailChimpController.getCampaignByTitle);
mailChimp.get("/getCampaignFiltered", mailChimpController.getCampaignsFiltered);

module.exports = mailChimp;

// bring data from mailChimp account
