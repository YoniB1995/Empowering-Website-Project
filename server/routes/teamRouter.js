const express = require('express')

const router = express.Router();
const teamController  =require('../controllers/teamController')

// @ GET request to get all admins in english.
// @ URL http://localhost:5000/team/english 
router.get('/english',teamController.getAllTeamEnglish);

// @ GET request to get all admins in hebrew.
// @ URL http://localhost:5000/team/hebrew 
router.get('/hebrew',teamController.getAllTeamHebrew);

// @ GET request to get on team member by id.
// @ URL http://localhost:5000/team/member/:id 
router.get('/member/:id',teamController.getTeamMember);

// @ POST request to get team member by role.
// @ URL http://localhost:5000/team/roles 
router.post('/roles',teamController.getTeamMemberByRole);

// @ PUT request to get edit team member details.
// @ URL http://localhost:5000/team/edit/:id 
router.put('/edit/:id',teamController.editTeamMember);

// @ POST request to get create new team member.
// @ URL http://localhost:5000/team/new
router.post('/new',teamController.addNewMember);

// @ DELETE request to delete existing team member by id.
// @ URL http://localhost:5000/team/:id
router.delete('/:id',teamController.deleteTeamMember);

module.exports = router;