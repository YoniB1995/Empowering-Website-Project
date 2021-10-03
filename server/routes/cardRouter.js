const express = require('express')
const cardRouter = express.Router()
const cardController = require('../controllers/cardController')
cardRouter.get('/',cardController.getAllCard)
cardRouter.post('/sendEmail',cardController.sendEmailCard)
cardRouter.post('/getByEmail',cardController.getCardByEmail)
module.exports = cardRouter 