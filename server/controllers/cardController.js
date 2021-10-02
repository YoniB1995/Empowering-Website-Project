const nodemailer = require('nodemailer');
let handlebars = require('handlebars');
const ErrorResponse = require('../utils/errorResponse');
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
            from: 'asalef10@gmail.com',
            to: req.body.card.email,
            subject: 'קבלה עבור כרטיס צרכנות-נשים אתיופיות מעצימות',
            attachments: [
              {
                filename: `${req.body.card.fullName}.png`,
                path: pathCardImage,
              }, 
            ],
            html: `
            
            <div id="asi" style="border: 3px solid black; height: 27rem;text-align: center;"> 
             <p style="line-height: 0;">${req.body.card.fullName} שלום </p>
             <p style="line-height: 0;">ההזמנה שלך נקלטה אצלנו במערכת!</p>
             <p style="line-height: 0;"> מעכשיו תוכלי להנות מכרטיס צרכנות של נשים אתיופיות מעצימות.</p>
              <p style="line-height: 0;"> כרטיס הצרכנות מצורף בקבלה שלפניכם   </p>
              <p style="line-height: 0;"> זקוקים לעזרה? רוצים לדבר איתנו? - אז עדיף שלא תשיבו למייל הזה כי זוהי הודעה אוטומטית  </p>
              <p style="line-height: 0;"> אנחנו זמינים כאן <a href="https://empowering-women-web.herokuapp.com/ContactUs"  target="_blank">לכניסה לאתר</a>  </p>

              <p>בברכה, נשים אתיופיות מעצימות,</p>

              <img src="https://scontent.fhfa4-1.fna.fbcdn.net/v/t1.6435-9/129297065_104202501553925_2705016418117868057_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yv-wty0tzksAX-psHZt&_nc_ht=scontent.fhfa4-1.fna&oh=7b921955f7bc4e79614e24ebd9a5e380&oe=617DEBE6" alt="empowering-logo" height="150px" width="150px" style="position: absolute; top:40% ;left: 40%;border-radius: 50%; border-color:white"/>

            </div>`
            
            ,
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
