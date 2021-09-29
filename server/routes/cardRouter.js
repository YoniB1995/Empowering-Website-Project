const express = require('express')
const cardRouter = express.Router()
const cardController = require('../controllers/cardController')
cardRouter.get('/',cardController.sendEmailCard)
module.exports = cardRouter  