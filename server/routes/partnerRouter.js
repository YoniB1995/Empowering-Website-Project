const express = require('express')

const router = express.Router();
const partnerController  =require('../controllers/partnerController')

// @ GET request to get all partners.
// @ URL http://localhost:5000/partners/all 
router.get('/all',partnerController.getAllPartners);

// @ GET request to get one partner.
// @ URL http://localhost:5000/partners/one/:id 
router.get('/one/:id',partnerController.getOnePlan);

// @ POST request to create new partner.
// @ URL http://localhost:5000/partners/new 
router.post('/new',partnerController.addNewPartner);

// @ PUT request to update existing partner.
// @ URL http://localhost:5000/partners/editpartner/:id 
router.put('/editpartner/:id',partnerController.editOnePartner);

// @ DELETE request to delete existing partner.
// @ URL http://localhost:5000/partners/delete/:id 
router.delete('/delete/:id',partnerController.deleteOnePartner);


module.exports = router;