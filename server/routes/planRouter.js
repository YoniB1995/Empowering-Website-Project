/* eslint-disable new-cap */
/* eslint-disable no-use-before-define */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-expressions */
const express = require('express');
const {planModel} = require('../models/planModel');

const planController = require('../controllers/planController');
const ErrorResponse = require("../utils/errorResponse");

const planRouter = express.Router();

planRouter.get('/all/english', planController.getAllPlansEnglish);
planRouter.get('/all/hebrew', planController.getAllPlansHebrew);
planRouter.post('/new', planController.createNewPlan);
planRouter.put('/edit/:id', planController.editPlan);
planRouter.delete('/:id', planController.deletePlan);

// function savePlanAndRedirect(path) {
//   return (async (req, res) => {
//     let { plan } = req;
//     plan.title = req.body.title;
//     plan.description = req.body.description;
//     plan.markdown = req.body.markdown;

//     try {
//       const newSavedPlan = await plan.save();
//       res.send(newSavedPlan);
//     } catch (error) {
//       return next(new ErrorResponse("Server Error!",500))
//     }
//   });
// }

module.exports = planRouter;
