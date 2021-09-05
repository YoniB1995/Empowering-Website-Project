const NewsLetterRouter = require("express").Router();
const NewsLetterController = require("../controllers/newsLetterController");

NewsLetterRouter.post("/createMember", NewsLetterController.createMember);
NewsLetterRouter.get("/getAllMembers", NewsLetterController.getAllMembers);
NewsLetterRouter.get("/getMember/:email", NewsLetterController.getMember);
NewsLetterRouter.get(
	"/getCampaign/:title",
	NewsLetterController.getCampaignByTitle
);
NewsLetterRouter.get(
	"/getCampaignFiltered",
	NewsLetterController.getCampaignsFiltered
);

module.exports = NewsLetterRouter;
