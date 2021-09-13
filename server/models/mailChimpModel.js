const MailchimpMarketingModel = require("@mailchimp/mailchimp_marketing");

const { API_KEY } = process.env;
const { AUDIENCE_ID } = process.env;
const { SERVER_PREFIX } = process.env;

MailchimpMarketingModel.setConfig({
	apiKey: API_KEY,
	server: SERVER_PREFIX,
});

module.exports = MailchimpMarketingModel;
