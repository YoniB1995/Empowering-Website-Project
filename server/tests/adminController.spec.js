// process.env.NODE_ENV = 'test';
const chai = require('chai')
const ChaiHttp = require('chai-http')
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const request = require('request')
const {adminModel} = require('../models/adminModel')
const adminClass = require("../utils/tests-classes/adminClass");
const teamDB = require('./teamDB.json')
chai.should();

const LOCAL_URL = 'http://localhost:5000';

describe('Admin Crud', () => {

  beforeEach(() => {
  this.get = sinon.stub(request, 'get');
  this.post = sinon.stub(request, 'post');
});

afterEach(() => {
  request.get.restore();
  request.post.restore();
});

describe('GET /team/member/:id', () => {
  it('should respond with a single movie', (done) => {
    const obj = teamDB.single.success;
    const memberID = teamDB.add.success.body.data[0]._id
    this.get.yields(null, obj.res, JSON.stringify(obj.body));
    request.get(`${LOCAL_URL}/team/member/${memberID}`, (err, res, body) => {
      res.statusCode.should.equal(200);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('success');
      body.data[0].should.include.keys(
        '_id', 'fullname', 'role', 'image', 'description','lang'
      );
      body.data[0].fullname.should.eql("יוני ביטאו");
      body.data[0]._id.should.eql(memberID);
      done();
    });
  });
  it('should throw an error if the movie does not exist', (done) => {
    const obj = teamDB.single.failure;
    this.get.yields(null, obj.res, JSON.stringify(obj.body));
    request.get(`${LOCAL_URL}/team/member/6133bca1faebadas48f88b8323`, (err, res, body) => {
      res.statusCode.should.equal(404);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('error');
      body.message.should.eql('That movie does not exist.');
      done();
    });
  });
});

// describe('POST /api/v1/movies', () => {
//   it('should return the movie that was added', (done) => {
//     const options = {
//       body: {
//         name: 'Titanic',
//         genre: 'Drama',
//         rating: 8,
//         explicit: true
//       },
//       json: true,
//       url: `${LOCAL_URL}/api/v1/movies`
//     };
//     const obj = movies.add.success;
//     this.post.yields(null, obj.res, JSON.stringify(obj.body));
//     request.post(options, (err, res, body) => {
//       res.statusCode.should.equal(201);
//       res.headers['content-type'].should.contain('application/json');
//       body = JSON.parse(body);
//       body.status.should.eql('success');
//       body.data[0].should.include.keys(
//         'id', 'name', 'genre', 'rating', 'explicit'
//       );
//       body.data[0].name.should.eql('Titanic');
//       console.log(body)
//       done();
//     });
//   });
// });
// describe('create New Admin', (done)=> {

//     const fakeAdmin = {
//     email:"yonatansamfisher@gmail.com",
//     password:"12345678"
//   };
//     it("should login the admin to the website if has correct token", async ()=> {
//     const {email,password} = fakeAdmin;
//       const stub = sinon.stub(adminModel, "findOne").set('Bearer Token');
//       const admin = new adminClass();
//       const newAdmin = await admin.createNewAdmin(email,password)
      
//     //   expect(stub.calledOnce).to.be.true;
//       expect(stub).have('Bearer Token')
      
//       console.log({newAdmin:newAdmin})
//     });

//   });

});
