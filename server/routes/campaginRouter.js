const campaginRouter = require("express").Router();

const campaginController = require("../controllers/campaginController");

campaginRouter.get(
	"/getCampaignsFiltered",
	campaginController.getCampaignsFiltered
);
campaginRouter.get(
	"/getCampaignByTitle/:title",
	campaginController.getCampaignByTitle
);

module.exports = campaginRouter;
