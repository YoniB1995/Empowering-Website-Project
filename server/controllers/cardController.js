const nodemailer = require('nodemailer');
let handlebars = require('handlebars');
const ErrorResponse = require('../utils/errorResponse');
let fs = require('fs');
const log = console.log;
const nodeHtmlToImage = require('node-html-to-image');
const { cardModel, validCard } = require('../models/cardModel');
const { counterModel } = require('../models/counterID');
let counterTwo;
counterModel.find({}, (error, result) => {
  if (error) throw error;

  counterTwo = result[0].counterID;
});
const sendEmailCard = async (req, res, next) => {
  try {
    const validBody = validCard(req.body.card);
    if (validBody.error) {
      return next(new ErrorResponse(`${validBody.error}`, 400));
    }

    req.body.card.idCard = counterTwo;
    console.log();
    counterModel.findByIdAndUpdate(
      process.env.IDCOUNTER,
      { counterID: (counterTwo += 1) },
      function (err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
    cardModel.insertMany([req.body.card], (error, result) => {
      if (error) throw error;
      res.json({ cardUser: result });
      const myPath = `${__dirname}/views/index.html`;
      let readHTMLFile = function (path, callback) {
        fs.readFile(myPath, { encoding: 'utf-8' }, (err, html) => {
          if (err) {
            throw err;
          } else {
            callback(null, html);
          }
        });
      };
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'tomalon1010@gmail.com',
          pass: 'asalef1010',
        },
      });
      2;
      readHTMLFile(myPath, function (err, html) {
        let template = handlebars.compile(html);
        let replacements = {
          username: `${req.body.card.fullName}`,
          date: '2021',
          Invoicing: counterTwo - 1,
        };
        let pathCardImage = `${__dirname}/card-images/${req.body.card.fullName}.png`;
        let htmlToSend = template(replacements);
        nodeHtmlToImage({
          path: myPath,
          output: pathCardImage,
          html: htmlToSend,
        }).then(() => {
          let mailOptions = {
            from: 'asalef10@gmail.com', // TODO: email sender
            to: req.body.card.email,
            subject: 'קבלה עבור כרטיס מועדון-נשים אתיופיות מעצימות',

            attachments: [
              {
                filename: `${req.body.card.fullName}.png`,
                path: pathCardImage,
              },
            ],
            html: htmlToSend,
          };

          transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
              return log(err);
            } else {
             return res.json({ message: `email sent` });
            }
          });
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllCard = async (req, res) => {
  cardModel.find({}, (error, result) => {
    if (error) throw error;
    res.json({ cards: result });
  });
};
module.exports = {
  sendEmailCard,
  getAllCard,
};
