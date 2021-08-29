const contactUsModel = require('../models/contactUsModel');
const ErrorResponse = require('../utils/errorResponse');

const createContactInformation = async (req, res, next) => {
  try {
    const contactInformation = await contactUsModel.insertMany(req.body);
    console.log(contactInformation);
    res.status(200).json({ contactInformation });
  } catch (e) {
    console.log('failed to add contactInformation ');
    next(new ErrorResponse('failed to add contactInformation', 500));
  }
};

const getAllContactInformation = async (req, res, next) => {
  try {
    const contactInformation = await contactUsModel.find({});
    console.log(contactInformation);
    if (!contactInformation) {
      next(new ErrorResponse('No ContactInformation saved, please add', 400));
    }
    res.status(200).json({ contactInformation });
  } catch (e) {
    console.log('failed to add contact information ');
    next(new ErrorResponse('Error', 500));
  }
};

const updateContactInformation = async (req, res, next) => {
  try {
    const contactInformation = await contactUsModel.findByIdAndUpdate(req.params.id, req.body);

    console.log(contactInformation);
    next(new ErrorResponse('success', 200));
  } catch (e) {
    console.log('failed to update contact information ');
    next(new ErrorResponse('Error', 500));
  }
};

const deleteContactInformation = async (req, res, next) => {
  try {
    const contactInformation = await contactUsModel.findByIdAndDelete(req.params.id);
    console.log(contactInformation);
    next(new ErrorResponse('success', 200));
  } catch (e) {
    console.log('failed to add contact information ');
    next(new ErrorResponse('Error', 500));
  }
};

module.exports = {
  createContactInformation,
  getAllContactInformation,
  updateContactInformation,
  deleteContactInformation,
};
