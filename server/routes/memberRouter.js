const express = require('express');
const memberController = require('../controllers/memberController');
const memberRouter = express.Router();

// @ GET request to get Members.
// @ URL http://localhost:5000/member/getMembers
memberRouter.get('/getMembers', memberController.getMembers);

// @ POST request to create Member.
// @ URL http://localhost:5000/member/createMember
memberRouter.post('/createMember', memberController.createMember);

// @ PUT request to updateMember.
// @ URL http://localhost:5000/member/updateMember/:Email
memberRouter.put('/updateMember/:Email', memberController.updateMember);

// @ DELETE request to deleteMember.
// @ URL http://localhost:5000/member/deleteMember/:Email
memberRouter.delete('/deleteMember/:Email', memberController.deleteMember);

module.exports = memberRouter;
