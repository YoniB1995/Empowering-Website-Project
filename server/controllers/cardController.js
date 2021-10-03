const nodemailer = require('nodemailer');
let handlebars = require('handlebars');
const ErrorResponse = require('../utilities/errorResponse');
let fs = require('fs');
const log = console.log;
const nodeHtmlToImage = require('node-html-to-image');
const { cardModel, validCard } = require('../models/cardModel');
const { counterModel } = require('../models/counterID');

let newCounter;

counterModel.find({}, (error, result) => {
  if (error) throw error;

  newCounter = result[0].counterID;
});
const sendEmailCard = async (req, res, next) => {
  try {
    const validBody = validCard(req.body.card);
    if (validBody.error) {
      return next(new ErrorResponse(`${validBody.error}`, 400));
    }

    req.body.card.idCard = newCounter;
    console.log();
    counterModel.findByIdAndUpdate(
      process.env.IDCOUNTER,
      { counterID: (newCounter += 1) },
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
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      readHTMLFile(myPath, function (err, html) {
        let template = handlebars.compile(html);
        let replacements = {
          username: `${req.body.card.fullName}`,
          date: '2021',
          Invoicing: newCounter - 1,
        };
        let pathCardImage = `${__dirname}/card-images/${req.body.card.fullName}.png`;
        let htmlToSend = template(replacements);
        nodeHtmlToImage({
          path: myPath,
          output: pathCardImage,
          html: htmlToSend,
        }).then(() => {
          let mailOptions = {
            from: 'EmpoweringEthiopianWomen7@gmail.com',
            to: req.body.card.email,
            subject: 'קבלה עבור כרטיס צרכנות-נשים אתיופיות מעצימות',
            attachments: [
              {
                filename: `${req.body.card.fullName}.png`,
                path: pathCardImage,
              },
            ],
            html: `
            
            <div id="cardEmail" style="border: 3px solid black; height: 27rem;text-align: center;"> 
           <h1>  <p style="line-height: 0;">${req.body.card.fullName} שלום </p></h1>
             <p style="line-height: 0;">ההזמנה שלך נקלטה אצלנו במערכת!</p>
             <p style="line-height: 0;"> מעכשיו תוכלי להנות מכרטיס צרכנות של נשים אתיופיות מעצימות.</p>
              <p style="line-height: 0;"> כרטיס הצרכנות מצורף בקבלה שלפניכם   </p>
              <p style="line-height: 0;"> זקוקים לעזרה? רוצים לדבר איתנו? - אז עדיף שלא תשיבו למייל הזה כי זוהי הודעה אוטומטית  </p>
              <p style="line-height: 0;"> אנחנו זמינים כאן <a href="https://empowering-women-web.herokuapp.com/ContactUs"  target="_blank">לכניסה לאתר</a>  </p>
              <p>בברכה, נשים אתיופיות מעצימות,</p>            
            </div>`,
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
  try {
    cardModel.find({}, (error, result) => {
      if (error) throw error;
      res.json({ cards: 'not found cards' });
    });
  } catch (error) {
    res.json({ message: 'not found' });
  }
};
const getCardByEmail = async (req, res, next) => {
  try {
    const card = await cardModel.find({ email: req.body.card.email });
    if (!card) {
      return next(new ErrorResponse('card not exists!', 404));
    }
    res.status(200).json({ card: card });
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse('Server Error !', 500));
  }
};


module.exports = {
  sendEmailCard,
  getAllCard,
  getCardByEmail,
};
