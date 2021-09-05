const express = require('express')

const router = express.Router();
const {getAllTeam,getTeamMember} =require('../controllers/teamController')

router.get('/',getAllTeam);
router.get('/:id',getTeamMember);

module.exports = router;