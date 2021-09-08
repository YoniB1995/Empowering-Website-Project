/* eslint-disable new-cap */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable new-cap */

const planModel = require("../models/planModel");
const ErrorResponse = require("../utils/errorResponse");

const createNewPlan = async (req, res, next) => {
  try {
    const {title,description,markdown,createdAt} = req.body;
    const plan = await planModel.create({title:title,description:description,markdown:markdown,createdAt:createdAt})

    if(!plan){
      return next(new ErrorResponse("Error,Fill al the details for your article!",404))
    }

    res.send({message:"sucesss",data:"imported successfully!"})
    // res.render("articles/new", { plan: new planModel() });
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse("Server Error", 500));
  }
};

const getAllPlans = async (req, res, next) => {
    try {
  const plans = await planModel.find({});
  if (!plans) {
    return next(
      new ErrorResponse("Can't find plans,check your route", 400)
    );
  }
  res.send(plans);
    // res.render("articles/new", { article });
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse("Server Error", 500));
  }
};

const editPlan = async (req, res, next) => {
  const {description,title,markdown} = req.body
  const newEditedPlan = {description:description,title:title,markdown:markdown}
  try {
  const newPlan = await planModel.findByIdAndUpdate(req.params.id,newEditedPlan);
  res.send({message:"success",plan:newPlan})
  }catch(error){
    next(new ErrorResponse("Server Error", 500))
  }
  
};

const deletePlan = async (req, res, next) => {
  try {
    const deletedPlan = await planModel.findByIdAndDelete(req.params.id);
    res.send({message:"plan deleted!",plan:deletedPlan})
  } catch (error) {
    next(new ErrorResponse("There is a server error", 500));
  }
};

const planController = {
  createNewPlan,
  getAllPlans,
  editPlan,
  deletePlan,
};

module.exports = planController;
