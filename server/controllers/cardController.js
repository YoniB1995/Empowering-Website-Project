const nodemailer = require('nodemailer');
let handlebars = require('handlebars');
let fs = require('fs');
const log = console.log;
const path = require('path');
const nodeHtmlToImage = require('node-html-to-image');
const { cardModel, validCard } = require('../models/cardModel');
const { counterModel } = require('../models/counterID');

let counterTwo;
counterModel.find({}, (error, result) => {
  if (error) throw error;

  counterTwo = result[0].counterID;
});
const sendEmailCard = async (req, res) => {
  try {
    req.body.card.idCard = counterTwo;
    console.log();
    counterModel.findByIdAndUpdate(
      '6155efbc710e9d4ab0b4ac68',
      { counterID: (counterTwo += 1) },
      function (err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
    cardModel.insertMany([req.body.card], (error, result) => {
      if (error)  throw error;
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
2
      readHTMLFile(myPath, function (err, html) {
        let template = handlebars.compile(html);
        let replacements = {
          username: `${req.body.card.fullName}`,
          date:"2021",
          Invoicing:counterTwo-1
        };
        let htmlToSend = template(replacements);
        nodeHtmlToImage({
          path: myPath,
          output: `./${req.body.card.fullName}.png`,
          html: htmlToSend,
        }).then(() => {
          let mailOptions = {
            from: 'asalef10@gmail.com', // TODO: email sender
            to: req.body.card.email,
            subject: 'קבלה עבור כרטיס מועדון-נשים אתיופיות מעצימות',

            attachments: [
              {
                filename: `./${req.body.card.fullName}.png`,
                path: `${req.body.card.fullName}.png`,
              },
            ],
            html: htmlToSend,  
          };

          transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
              return log(err);
            } else {
              res.json({ message: `email sent` });
              return console.log('Email sent!!!');
            }
          });
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllCard = async (req,res) => {
  cardModel.find({}, (error, result) => {
    if (error) throw error
    res.json({cards:result});
  })
}
module.exports = {
  sendEmailCard,
  getAllCard
};
// const nodemailer = require('nodemailer');
// let handlebars = require('handlebars');
// let fs = require('fs');
// const log = console.log;
// const path = require('path');
// const nodeHtmlToImage = require('node-html-to-image');
// const { cardModel, validCard } = require('../models/cardModel');
// const { counterModel } = require('../models/counterID');

// let counterTwo;
// counterModel.find({}, (error, result) => {
//   if (error) throw error

//   counterTwo = result[0].counterID

// })
// const sendEmailCard = async (req, res) => {
//   try {
//     req.body.card.idCard = counterTwo;
//     console.log();
//     counterModel.findByIdAndUpdate("6155efbc710e9d4ab0b4ac68", { counterID: counterTwo+=1 }, function (err, result) {
//       if (err) throw err
//       console.log(result);
//     })
//     cardModel.insertMany([req.body.card], (error, result) => {
//       if (error) throw error;

//       res.json({ cardUser: result });
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const sendEmailCardx = async (req, res) => {

//   const myPath = `${__dirname}/views/index.html`;
//   let readHTMLFile = function (path, callback) {
//     fs.readFile(myPath, { encoding: 'utf-8' }, function (err, html) {
//       if (err) {
//         throw err;
//       } else {
//         callback(null, html);
//       }
//     });
//   };
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'tomalon1010@gmail.com',
//       pass: 'asalef1010',
//     },
//   });

//   readHTMLFile(myPath, function (err, html) {
//     let template = handlebars.compile(html);
//     let replacements = {
//       username: 'req.body.user.name',
//       date: '20/2',
//     };

//     let htmlToSend = template(replacements);
//     nodeHtmlToImage({
//       path: myPath,
//       output: `./${req.body.user.name}.png`,
//       html: htmlToSend,
//     }).then(() => {
//       let mailOptions = {
//         from: 'asalef10@gmail.com', // TODO: email sender
//         to: 'asalef10@yahoo.com',
//         subject: 'קבלה עבור כרטיס מועדון-נשים אתיופיות מעצימות',
//         attachments: [
//           {
//             filename: `./${req.body.user.name}.png`,
//             path: myPath,
//           },
//         ],
//         html: htmlToSend,
//       };

//       transporter.sendMail(mailOptions, (err, data) => {
//         if (err) {
//           return log(err);
//         } else {
//           res.json({ msg: `email sent` });
//           return console.log('Email sent!!!');
//         }
//       });
//     });
//   });
// };
// module.exports = {
//   sendEmailCard,
// };
