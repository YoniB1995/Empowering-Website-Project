const express = require('express')
const cardRouter = express.Router()
const cardController = require('../controllers/cardController')
cardRouter.post('/sendEmail',cardController.sendEmailCard)
cardRouter.get('/',cardController.getAllCard)
module.exports = cardRouter 