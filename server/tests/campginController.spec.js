// process.env.NODE_ENV = 'test';
// const server = require("../server");
// const chai = require("chai");
// const ChaiHttp = require("chai-http");
// const sinon = require("sinon");
// const expect = chai.expect;
// const faker = require("faker");
// const { campaginModel } = require("../models/campaginModel");
// const campaginClass = require("../utilities/tests-classes/campaginClass");

// chai.should();

// chai.use(ChaiHttp);
// const promiseMethod = () => {
//     return new Promise((resolve) => {
//         return setTimeout(() => {
//             resolve();
//         }, 1000)
//     })
// }


// describe("Get all campagins", (done) => {
//     it.only("should get all campagins from mailChimp and desturct arcivhe url", async (done) => {

//         chai.request(server)
//             .get('/campagin/getCampaignsSorted', await promiseMethod())
//             .end(res => {
//                 console.log(res);
//                 expect(res).to.have.statusCode(500);
//                 done();
//             })


//     })


// });


