const campaginRouter = require("express").Router();

const campaginController = require("../controllers/campaginController");

campaginRouter.get(
	"/getCampaignsSorted", 
	campaginController.getCampaignsSorted
);
campaginRouter.get(
	"/getCampaignByTitle/:title",
	campaginController.getCampaignByTitle
);

campaginRouter.post(
	"/getDataFromMailchimp",
	campaginController.getDataFromMailchimp
);

campaginRouter.get(
	"/getDataFromMailchimp",
	campaginController.getDataFromMailchimp
);

module.exports = campaginRouter;
