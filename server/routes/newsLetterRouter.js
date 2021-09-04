const NewsLetterRouter = require('express').Router();
const NewsLetterController = require('../controllers/newsLetterController');

NewsLetterRouter.post('/createMember', NewsLetterController.createMember);
NewsLetterRouter.get('/', NewsLetterController.getAllMembers);
NewsLetterRouter.get('/getMember/:email', NewsLetterController.getMember);

module.exports = NewsLetterRouter;
