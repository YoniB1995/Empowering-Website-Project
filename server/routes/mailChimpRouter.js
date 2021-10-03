const mailChimp = require("express").Router();
const mailChimpController = require("../controllers/mailChimpController");

mailChimp.post("/createMember", mailChimpController.createMember);
mailChimp.put("/updateMember/:Email", mailChimpController.updateMember);
mailChimp.delete("/deleteMember/:Email", mailChimpController.deleteMember);

mailChimp.get("/getAllMembers", mailChimpController.getAllMembers);
mailChimp.get("/getMember/:Email", mailChimpController.getMember);

module.exports = mailChimp;

