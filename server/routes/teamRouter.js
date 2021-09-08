const express = require('express')

const router = express.Router();
const teamController  =require('../controllers/teamController')

router.get('/',teamController.getAllTeam);
router.get('/member/:id',teamController.getTeamMember);
router.get('/roles',teamController.getTeamMemberByRole);
router.put('/edit/:id',teamController.editTeamMember);
router.post('/new',teamController.addNewMember);
router.delete('/:id',teamController.deleteTeamMember);

module.exports = router;