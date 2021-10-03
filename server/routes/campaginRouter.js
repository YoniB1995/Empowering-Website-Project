const campaginRouter = require("express").Router();

const campaginController = require("../controllers/campaginController");

// @ GET request to get all Campaigns.
// @ URL http://localhost:5000/campagin/getCampaignsSorted
campaginRouter.get(
	"/getCampaignsSorted",
	campaginController.getCampaignsSorted
);


module.exports = campaginRouter;
