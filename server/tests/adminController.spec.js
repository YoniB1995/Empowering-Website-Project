// process.env.NODE_ENV = 'test';
const chai = require('chai')
const sinon = require("sinon");
const request = require('request')
const adminDB = require('./adminDB')
chai.should();

const LOCAL_URL = 'http://localhost:5000';

describe('Admin Crud', () => {

  beforeEach(() => {
  this.get = sinon.stub(request, 'get');
  this.post = sinon.stub(request, 'post');
  this.put = sinon.stub(request, 'put');
  this.delete = sinon.stub(request, 'delete');
});

afterEach(() => {
  request.get.restore();
  request.post.restore();
  request.put.restore();
  request.delete.restore();
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

describe('DELETE /admin', () => {
  it('should get delete admin account details from the fake collection', (done) => {
    const obj = adminDB.deleteAdmin.success;
    this.delete.yield(null, obj.res, JSON.stringify(obj.body));
    request.delete(`${LOCAL_URL}/admin/delete/614b9fa0df92314c81d69f06`, (err, res, body) => {
      res.statusCode.should.equal(200);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('success');
      body.data.deletedAdmin.should.include.keys('status','data',"success");
      body.data.deletedAdmin.username = "Yoni Bitew";
      body.data.message = "Admin Deleted!";

      done();
    });
  });

    it('should get not delete admin account details from the fake collection', (done) => {
      const obj = adminDB.deleteAdmin.failure;
      this.delete.yield(null, obj.res, JSON.stringify(obj.body));
      request.delete(`${LOCAL_URL}/admin/:id`, (err, res, body) => {
        res.statusCode.should.equal(404);
        res.headers['content-type'].should.contain('application/json');
        body = JSON.parse(body);
        body.status.should.eql('success');
        body.data.deletedAdmin.should.include.keys('status','data',"success");
        body.data.deletedAdmin.username = "Yoni Bitew";
        body.data.message = "Admin Deleted!";
  
        done();
      })
    })

});

});
