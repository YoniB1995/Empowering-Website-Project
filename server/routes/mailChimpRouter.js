const mailChimp = require("express").Router();
const mailChimpController = require("../controllers/mailChimpController");

// @ POST request to create new member.
// @ URL http://localhost:5000/mailChimp/createMember
mailChimp.post("/createMember", mailChimpController.createMember);

// @ PUT request to update member.
// @ URL http://localhost:5000/mailChimp/updateMember/:Email
mailChimp.put("/updateMember/:Email", mailChimpController.updateMember);

// @ DELETE request to delete member in mailchimp.
// @ URL http://localhost:5000/mailChimp/deleteMember/:Email
mailChimp.delete("/deleteMember/:Email", mailChimpController.deleteMember);

// @ GET request to get all members in mailchimp.
// @ URL http://localhost:5000/mailChimp/getAllMembers
mailChimp.get("/getAllMembers", mailChimpController.getAllMembers);

// @ GET request to get member by email.
// @ URL http://localhost:5000/mailChimp/getMember/:Email
mailChimp.get("/getMember/:Email", mailChimpController.getMember);

module.exports = mailChimp;

