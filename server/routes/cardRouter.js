const express = require('express')
const cardRouter = express.Router()
const cardController = require('../controllers/cardController')

// @ GET request to get all cards.
// @ URL http://localhost:5000/card
cardRouter.get('/', cardController.getAllCard)

// @ POST request to send memberShip to mail.
// @ URL http://localhost:5000/card/sendEmail
cardRouter.post('/sendEmail', cardController.sendEmailCard)

// @ POST request to get card by email.
// @ URL http://localhost:5000/card/getCardByEmail
cardRouter.post('/getCardByEmail',cardController.getCardByEmail)
module.exports = cardRouter 