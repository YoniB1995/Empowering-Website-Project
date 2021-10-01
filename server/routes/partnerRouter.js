const express = require('express')

const router = express.Router();
const partnerController  =require('../controllers/partnerController')

router.get('/all',partnerController.getAllPartners);
router.get('/one/:id',partnerController.getOnePlan);
router.post('/new',partnerController.addNewPlan);
router.put('/editpartner/:id',partnerController.editOnePartner);
router.delete('/delete/:id',partnerController.deleteOnePartner);


module.exports = router;