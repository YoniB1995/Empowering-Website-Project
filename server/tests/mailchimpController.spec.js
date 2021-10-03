// // process.env.NODE_ENV = 'test';
// const chai = require('chai')
// const ChaiHttp = require('chai-http')
// const server = require('../server')
// const sinon = require("sinon");
// const expect = chai.expect;
// const faker = require("faker");
// const { MailchimpMarketingModel } = require("../models/mailChimpModel");
// const MailchimpMarketingClass = require("../utils/tests-classes/campaginClass");

// chai.should();

// chai.use(ChaiHttp)
// describe("Mailchimp Crud", () => {

//     describe('create subscriber', (done) => {

//         const fakeMember = [{
//             email_address: "Asalef10@gmail.com",
//             status: "subscribed"
//         }];
//         it.only("should add a new user to the db", async (done) => {
//             const MailchimpMarketingObject = new MailchimpMarketingClass();
//             const user = await MailchimpMarketingObject.getCampaignsSorted();
//             const stub = sinon.stub(MailchimpMarketingModel, "lists").usingPromise(fakeMember).resolves(async (res) => {
//                 console.log(res);
//                 expect(stub.calledOnce).to.be.true;
//                 expect(user.members[0].email_address).to.equal(fakeMember[0].email_address);
//                 done();

//             }).rejects("no connect");
//             done();


//         });
//     });
// })