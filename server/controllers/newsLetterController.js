const Mailchimp = require('mailchimp-api-v3');

const { API_KEY } = process.env;
const { AUDIENCE_ID } = process.env;

function createMember(req, res) {
  const mailchimpObject = new Mailchimp(API_KEY);
  const { sentEmail, check } = req.body;
  res.status(200).json('check');
  mailchimpObject.post(`lists/${AUDIENCE_ID}/members`, {
    email_address: sentEmail,
    status: 'pending',
  })
    .then((response) => res.send(response))
    .catch((e) => console.log(e));
}

module.exports = createMember;
