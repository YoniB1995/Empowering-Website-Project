const {validContact,contactModel} = require('../models/contactUsModel');

const ErrorResponse = require('../utils/errorResponse');

const createContactInformation = async(req,res,next)=>{
  try{
    const {error} = validContact(req.body)
    if (error){
      next( new ErrorResponse({error:error.details[0].message}))
    }
    res.status(200).json({ contactInformation });
  }
    catch(e){
      next(new ErrorResponse('bed request',301))
}
  }


const getAllContactInformation = async (req, res, next) => {

  try {
    const {error} = validContact(req.body)
    if (error){
      next( new ErrorResponse({error:error.details[0].message}))
    }
    const contactInformation = await contactModel.find({});
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
    const {error} = validContact(req.body)
    if (error){
      next( new ErrorResponse({error:error.details[0].message}))
    }
    const contactInformation = await contactModel.findByIdAndUpdate(req.params.id, req.body);

   
    next(new ErrorResponse('success', 200));
  } catch (e) {
    console.log('failed to update contact information ');
    next(new ErrorResponse('Error', 500));
  }
};

const deleteContactInformation = async (req, res, next) => {
  const {error} = validContact(req.body)
  if (error){
    next( new ErrorResponse({error:error.details[0].message}))
  }
  try {
    const contactInformation = await contactModel.findByIdAndDelete(req.params.id);
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
