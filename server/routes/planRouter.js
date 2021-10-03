/* eslint-disable new-cap */
/* eslint-disable no-use-before-define */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-expressions */
const express = require('express');

const planRouter = express.Router();
const planController = require('../controllers/planController');

// @ GET request to get all plans in english.
// @ URL http://localhost:5000/plans/all/english 
planRouter.get('/all/english', planController.getAllPlansEnglish);

// @ GET request to get all plans in hebrew.
// @ URL http://localhost:5000/plans/all/hebrew 
planRouter.get('/all/hebrew', planController.getAllPlansHebrew);

// @ POST request to create a new plan.
// @ URL http://localhost:5000/plans/new 
planRouter.post('/new', planController.createNewPlan);

// @ PUT request to updated an existing plan.
// @ URL http://localhost:5000/plans/edit/:id 
planRouter.put('/edit/:id', planController.editPlan);

// @ DELETE request to delete an existing plan.
// @ URL http://localhost:5000/plans/:id
planRouter.delete('/:id', planController.deletePlan);


module.exports = planRouter;
