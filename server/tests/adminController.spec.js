// process.env.NODE_ENV = 'test';
const chai = require('chai')
const ChaiHttp = require('chai-http')
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const request = require('request')
const {adminModel} = require('../models/adminModel')
const adminClass = require("../utils/tests-classes/adminClass");
const adminDB = require('./adminTests')
chai.should();

const LOCAL_URL = 'http://localhost:5000';

describe('Admin Crud', () => {

  beforeEach(() => {
  this.get = sinon.stub(request, 'get');
  this.post = sinon.stub(request, 'post');
  this.put = sinon.stub(request, 'put');
});

afterEach(() => {
  request.get.restore();
  request.post.restore();
  request.put.restore();
});

describe('GET /admin', () => {
  it('should get all the admins account details from the fake collection', (done) => {
    const obj = adminDB.getAllAdmins.success;
    this.get.yields(null, obj.res, JSON.stringify(obj.body));
    request.get(`${LOCAL_URL}/admin`, (err, res, body) => {
      res.statusCode.should.equal(200);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('success');
      body.data[0].should.include.keys(
        'username', 'email', 'password'
      );
      body.data[2].username.should.eql("Racheli Melkai");
      console.log(body.data)
      done();
    });
  });
  // it('should throw an error if the movie does not exist', (done) => {
  //   const obj = teamDB.single.failure;
  //   this.get.yields(null, obj.res, JSON.stringify(obj.body));
  //   request.get(`${LOCAL_URL}/team/member/6133bca1faebadas48f88b8323`, (err, res, body) => {
  //     res.statusCode.should.equal(404);
  //     res.headers['content-type'].should.contain('application/json');
  //     body = JSON.parse(body);
  //     body.status.should.eql('error');
  //     body.message.should.eql('That movie does not exist.');
  //     done();
  //   });
  // });
});

describe('GET /admin/getadmin/:id', () => {
  it('should get a single admin by choice from the fake admin db collection', (done) => {
    const obj = adminDB.getOneAdmin.success;
    const memberID = adminDB.getOneAdmin.success.body.data[0]._id
    this.get.yields(null, obj.res, JSON.stringify(obj.body));
    request.get(`${LOCAL_URL}/team/member/${memberID}`, (err, res, body) => {
      res.statusCode.should.equal(200);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('success');
      body.data[0].should.include.keys(
        'username', 'email', 'password'
      );
      body.data[0]._id.should.eql("614b9fa0df92314c81d69f06")
      body.data[0].username.should.eql("Yoni Bitew");
      console.log(body.data)
      done();
    });
  });
  it('should throw an error if the admin details does not exist', (done) => {
    const obj = adminDB.getOneAdmin.failure;
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

describe('POST /admin/login', () => {
  it('should log the admin after checking if the data is valid and exists at the fake db collection', (done) => {
    const options = {
      body:  {
            username: "Updated yoni bitew",
        },
      json: true,
      url: `${LOCAL_URL}/admin/update`
    };
    const obj = adminDB.updateAdminDetails
    this.put.yields(null, obj.success.res, JSON.stringify(obj.success.body));
    request.put(options, (err, res, body) => {
      res.statusCode.should.equal(201);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('success');
      body.data[0].should.include.keys(
        'email', 'password'
      );
      body.data[0].email.should.eql('yonibitew@gmail.com');
      body.data[0].username = options.body.username;

      body.data[0].username.should.eql("Updated yoni bitew")
      console.log(body)
      done();
    });
  });

  it('should throw an error if the admin details does not exist', (done) => {
    const options = {
      body: { username: "Updated yoni bitew" },
      json: true,
      url:  `${LOCAL_URL}/admin/update`
    };
    const obj = adminDB.updateAdminDetails;
    this.put.yields(null, obj.failure.res, JSON.stringify(obj.failure.body));
    request.put(options, (err, res, body) => {
      res.statusCode.should.equal(404);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('error');
      body.message.should.eql('Admin details does not exist.');
      done();
    });
  });
});


});
