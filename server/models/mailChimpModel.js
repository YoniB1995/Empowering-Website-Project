const MailchimpMarketingModel = require("@mailchimp/mailchimp_marketing");
const mailChimpModel = require("mailchimp-api-v3");

const { API_KEY } = process.env;
const { AUDIENCE_ID } = process.env;
const { SERVER_PREFIX } = process.env;

MailchimpMarketingModel.setConfig({
	apiKey: API_KEY,
	server: SERVER_PREFIX,
});

module.exports = { MailchimpMarketingModel, mailChimpModel };

// mailChimp model with config
