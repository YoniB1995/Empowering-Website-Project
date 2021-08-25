const contactUsModel = require('../models/contactUsModel');

const createContactInformation = async (req, res) => {
  try {
    const contactInformation = await contactUsModel.insertMany(req.body);
    res.status(200).send(contactInformation);
  } catch (e) {
    console.log('failed to add contactInformation ');
    res.status(400).send({ error: 'failed to add contactInformation ' });
  }
};

const getAllContactInformation = async (req, res) => {
  try {
    const contactInformation = await contactUsModel.find({});
    res.status(200).send(contactInformation);
  } catch (e) {
    console.log('failed to add contact information ');
    res.status(400).send({ error: 'failed to add contact information ' });
  }
};

const updateContactInformation = async (req, res) => {
  try {
    const contactInformation = await contactUsModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(contactInformation);
  } catch (e) {
    console.log('failed to update contact information ');
    res.status(400).send({ error: 'failed to update contact information ' });
  }
};

const deleteContactInformation = async (req, res) => {
  try {
    const contactInformation = await contactUsModel.findByIdAndDelete(req.params.id);
    res.status(200).send(contactInformation);
  } catch (e) {
    console.log('failed to add contact information ');
    res.status(400).send({ error: 'failed to add contact information ' });
  }
};

module.export = {
  createContactInformation,
  getAllContactInformation,
  updateContactInformation,
  deleteContactInformation,
};
