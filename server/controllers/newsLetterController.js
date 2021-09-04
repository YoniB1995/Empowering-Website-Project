const Mailchimp = require('mailchimp-api-v3');

const { API_KEY } = process.env;
const { AUDIENCE_ID } = process.env;

const createMember = (req, res) => {
  let mailchimpObject;
  try {
    mailchimpObject = new Mailchimp(API_KEY);
  } catch (e) {
    console.log('API KEY is not available');
  }

  const { sentEmail, check } = req.body;

  if (!sentEmail) {
    res.status(400).json('please add information to the request');
  }
  res.status(200).json('check');

  mailchimpObject.post(`lists/${AUDIENCE_ID}/members`, {
    email_address: sentEmail,
    status: 'pending',
  })
    .then((response) => res.status(200).json(response))
    .catch((e) => console.log(e));
};

const getAllMembers = (req, res) => {
  let mailchimpObject;
  try {
    mailchimpObject = new Mailchimp(API_KEY);
  } catch (e) {
    console.log('API KEY is not available');
  }
  mailchimpObject.get(`lists/${AUDIENCE_ID}/members`)
    .then((response) => res.json(response))
    .catch((e) => console.log(e));
};

const getMember = (req, res) => {
  let mailchimpObject;
  try {
    mailchimpObject = new Mailchimp(API_KEY);
  } catch (e) {
    console.log('API KEY is not available');
  }

  mailchimpObject.get(`lists/${AUDIENCE_ID}/members`).then((audience) => {
    const { email } = req.params;
    const chosenMember = audience.members.filter((member) => email === member.email_address);
    console.log(chosenMember);
    res.status(200).send(chosenMember);
  })
    .catch((e) => console.log(e));
};

module.exports = {
  createMember, getAllMembers, getMember,
};
