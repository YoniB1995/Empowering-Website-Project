// process.env.NODE_ENV = 'test';
const chai = require('chai')
const sinon = require("sinon");
const faker = require("faker");
const request = require('request')
const partnersDB = require('./partnersDB')
chai.should();

const LOCAL_URL = 'http://localhost:5000';

describe('Partners Crud', () => {

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

describe('GET /partners/all ', () => {
  it('should get all the partners details from the fake collection', (done) => {
    const obj = partnersDB.getAllPartners.success
    this.get.yields(null, obj.res, JSON.stringify(obj.body));
    request.get(`${LOCAL_URL}/team/english`, (err, res, body) => {
      res.statusCode.should.equal(200);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('success');
      body.data.map((partners)=> partners.should.include.keys('_id', 'name', 'image'))
      console.log(body.data)
      done();
    });
  });
});

describe('GET /partners/one/:id', () => {
  it('should get a single partner by choice from the fake partners db collection', (done) => {
    const obj = partnersDB.getOnePartner.success;
    const memberID = partnersDB.getOnePartner.success.body.data[0]._id;
    this.get.yields(null, obj.res, JSON.stringify(obj.body));
    request.get(`${LOCAL_URL}/team/member/${memberID}`, (err, res, body) => {
      res.statusCode.should.equal(200);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('success');
      
      body.data[0].should.include.keys(
        '_id','name','image'
      );
      body.data[0]._id.should.eql("61571a40ee939ad2a8ffdb73")
      body.data[0].name.should.eql("Tauber Family Foundation");
      body.data[0].image.should.eql("https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ldlxcoq2gyt9uoskqcna");
      console.log(body.data)
      done();
    });
  });
  it('should throw an error if the team member details does not exist', (done) => {
    const obj = partnersDB.getOnePartner.failure;
    this.get.yields(null, obj.res, JSON.stringify(obj.body));
    request.get(`${LOCAL_URL}/team/member/61571a40ee939ad2a8ffdb73`, (err, res, body) => {
      res.statusCode.should.equal(404);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('error');
      body.message.should.eql('The partner details does not exist..');
      done();
    });
  });
});

describe('POST /partners/new', () => {
  it('should add a new partner to the fake team partners collection', (done) => {
    const obj = partnersDB.addNewPartner.success;
    const options = {
      body:  {
            "name": "Yoni Bitew Foundation",
            "image": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ldlxcoq2gyt9uoskqcna"  
        },
      json: true,
      url: `${LOCAL_URL}/partners/new`
    };
    this.post.yields(null, obj.res, JSON.stringify(obj.body));
    request.post(`${LOCAL_URL}/partners/new`, (err, res, body) => {
      res.statusCode.should.equal(201);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('success');
      
      body.data.push(options.body);
      body.data[0].should.include.keys('name','image')
      console.log(body.data)
      done();
    });
  });
  it('should throw an error if the partner  details does not exist', (done) => {
    const obj = partnersDB.getOnePartner.failure;
    this.get.yields(null, obj.res, JSON.stringify(obj.body));
    request.get(`${LOCAL_URL}/team/member/61571a40ee939ad2a8ffdb73`, (err, res, body) => {
      res.statusCode.should.equal(404);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('error');
      body.message.should.eql('The partner details does not exist..');
      done();
    });
  });
});


describe('PUT /partners/editpartner/:id', () => {
  it('should update existing partner to the fake db collection', (done) => {
    const options = {
      body:  {
            _id: "61571a40ee939ad2a8ffdb73",
            name: "New Updated Yoni Bitew",
            image: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ldlxcoq2gyt9uoskqcna"
        },
      json: true,
      url: `${LOCAL_URL}/partners/editpartner/61571a40ee939ad2a8ffdb73`
    };
    const obj = partnersDB.updatePartnerDetails.success;
    this.put.yields(null, obj.res, JSON.stringify(obj.body));
    request.put(options, (err, res, body) => {
      res.statusCode.should.equal(201);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('success');
      body.data[0] = options.body
      body.data[0].should.include.keys(
        '_id','name','image'
      );
      body.data[0]._id.should.eql(options.body._id);
      body.data[0].image.should.eql(options.body.image);
      body.data[0].name.should.eql(options.body.name);
      

      console.log(body)
      done();
    });
  });
});

it('should throw an error if the team members details does not match', (done) => {
    const options = {
       body:  {
          _id: "61571a40ee939ad2a8ffdb73",
            name: "New Updated Yoni Bitew",
            image: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ldlxcoq2gyt9uoskqcna"
        },
      json: true,
      url:  `${LOCAL_URL}/partners/editpartner/61571a40ee939ad2a8ffdb73`
    };
    const obj = partnersDB.updatePartnerDetails;
    this.put.yields(null, obj.failure.res, JSON.stringify(obj.failure.body));
    request.put(options, (err, res, body) => {
      res.statusCode.should.equal(404);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('error');
      body.message.should.eql('Partner details not exist.');
      done();
    });
  });

  

});



