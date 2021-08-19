const NewsLetterRouter = require('express').Router();
const NewsLetterController = require('../controllers/newsLetterController');

NewsLetterRouter.post('/', NewsLetterController);

module.exports = NewsLetterRouter;
