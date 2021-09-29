const nodemailer = require('nodemailer');
let handlebars = require('handlebars');
let fs = require('fs');
const log = console.log;
const nodeHtmlToImage = require('node-html-to-image');
// const htmlPage = require('../views/cardEmail/')

const sendEmailCard = async (req, res) => {
  let readHTMLFile = function (path, callback) {
    fs.readFile(__dirname + 'index.html', { encoding: 'utf-8' }, function (err, html) {
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
// const r = require('../views/cardEmail/')
    
  readHTMLFile(__dirname + 'index.html', function (err, html) {
    let template = handlebars.compile(html);
    let replacements = {
      username: 'req.body.user.name',
      date: '20/2', 
      };
      
    let htmlToSend = template(replacements);
    nodeHtmlToImage({
      output: `./req.body.user.name.png`,
      html: htmlToSend,
    }).then(() => {
        let mailOptions = {
            from: 'asalef10@gmail.com', // TODO: email sender
            to: 'asalef10@yahoo.com',
            subject: 'קבלה עבור כרטיס מועדון-נשים אתיופיות מעצימות',
            attachments: [
                {
                    filename: `./${req.body.user.name}.png`,
                    path: `${req.body.user.name}.png`,
                },
            ],
            html: htmlToSend,
        };
        
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                return log(err);
            } else {
                res.json({ msg: `email sent` });
                return console.log('Email sent!!!');
            }
        });
    });
});
};
module.exports = {
    sendEmailCard,
  };
  