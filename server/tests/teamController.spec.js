// process.env.NODE_ENV = 'test';
const chai = require('chai')
const sinon = require("sinon");
const faker = require("faker");
const request = require('request')
const teamDB = require('./teamDB')
chai.should();

const LOCAL_URL = 'http://localhost:5000';

describe('Team Crud', () => {

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

describe('GET /team/english', () => {
  it('should get all the team members account details in english from the fake collection', (done) => {
    const obj = teamDB.getAllTeamMembers.success
    this.get.yields(null, obj.res, JSON.stringify(obj.body));
    request.get(`${LOCAL_URL}/team/english`, (err, res, body) => {
      res.statusCode.should.equal(200);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('success');
      body.data[0].should.include.keys(
        '_id', 'fullname', 'role','image','description','lang'
      );
      body.data[0].lang.should.not.eql("hebrew")
      console.log(body.data)
      done();
    });
  });
});

describe('GET /team/member/:id', () => {
  it('should get a single team member by choice from the fake admin db collection', (done) => {
    const obj = teamDB.getOneTeamMember.success;
    const memberID = teamDB.getOneTeamMember.success.body.data[0]._id
    this.get.yields(null, obj.res, JSON.stringify(obj.body));
    request.get(`${LOCAL_URL}/team/member/${memberID}`, (err, res, body) => {
      res.statusCode.should.equal(200);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('success');
      body.data[0].should.include.keys(
        '_id', 'fullname', 'role','image','description','lang'
      );
      body.data[0]._id.should.eql("614eee25657f2814c3e767d4")
      body.data[0].fullname.should.eql("Sheli Avraham");
      console.log(body.data)
      done();
    });
  });
  it('should throw an error if the team member details does not exist', (done) => {
    const obj = teamDB.getOneTeamMember.failure;
    this.get.yields(null, obj.res, JSON.stringify(obj.body));
    request.get(`${LOCAL_URL}/team/member/614eee25657f2814c3e767d4`, (err, res, body) => {
      res.statusCode.should.equal(404);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('error');
      body.message.should.eql('Team member details not exist.');
      done();
    });
  });
});

describe('POST /team/roles', () => {
  it('should get a list of team members by role choice from the fake team db collection', (done) => {
    const obj = teamDB.getTeamMemberByRole.success;
    const options = {
      body:  {
           role:"Board of Directors"
        },
      json: true,
      url: `${LOCAL_URL}/team/roles`
    };
    this.post.yields(null, obj.res, JSON.stringify(obj.body));
    request.post(`${LOCAL_URL}/team/roles`, (err, res, body) => {
      res.statusCode.should.equal(200);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('success');
      
      body.data.map((teamMember,i)=>{
        teamMember.should.include.keys('_id', 'fullname', 'role','image','description','lang');

      })
      body.data.map((teamMember,i)=>{
        teamMember.role.should.eql(options.body.role);

      })
      console.log(body.data)
      done();
    });
  });
  it('should throw an error if the team member details does not exist', (done) => {
    const obj = teamDB.getOneTeamMember.failure;
    this.get.yields(null, obj.res, JSON.stringify(obj.body));
    request.get(`${LOCAL_URL}/team/member/614eee25657f2814c3e767d4`, (err, res, body) => {
      res.statusCode.should.equal(404);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('error');
      body.message.should.eql('Team member details not exist.');
      done();
    });
  });
});

describe('POST /team/new', () => {
  it('should a new team member to the fake db collection', (done) => {
    const options = {
      body:  {
           fullname: "Yoni Bitew",
            role: "Founder",
            image: "https://www.iconsdb.com/icons/preview/red/administrator-xxl.png",
            description: "This is a test description for testing API new added",
            lang: "english"
        },
      json: true,
      url: `${LOCAL_URL}/team/new`
    };
    const obj = teamDB.addTeamMember.success;
    this.post.yields(null, obj.res, JSON.stringify(obj.body));
    request.post(options, (err, res, body) => {
      res.statusCode.should.equal(201);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('success');
      body.data[0].should.include.keys(
        '_id', 'fullname','role','image','description','lang'
      );

      body.data.push(options.body)

      const newTeamMember = body.data.map((newTeamMember) => newTeamMember.fullname === "Yoni Bitew" && newTeamMember);
      body.data[1].fullname.should.eql("Yoni Bitew");
    console.log(newTeamMember)
      done();
    });
  });
});


describe('PUT /team/edit/:id', () => {
  it('should update existing member to the fake db collection', (done) => {
    const options = {
      body:  {
           fullname: "Yoni Bitew",
            role: "Founder",
            image: "https://www.iconsdb.com/icons/preview/red/administrator-xxl.png",
            description: "This is a test description for testing API new added",
            lang: "english"
        },
      json: true,
      url: `${LOCAL_URL}/team/new`
    };
    const obj = teamDB.updateTeamDetails.success;
    this.put.yields(null, obj.res, JSON.stringify(obj.body));
    request.put(options, (err, res, body) => {
      res.statusCode.should.equal(201);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('success');
      body.data[0] = options.body
      body.data[0].should.include.keys(
        'fullname','role','image','description','lang'
      );
      body.data[0].fullname.should.eql(options.body.fullname);
      body.data[0].image.should.eql(options.body.image);
      body.data[0].lang.should.eql(options.body.lang);
      body.data[0].description.should.eql(options.body.description);
      body.data[0].role.should.eql(options.body.role);

      console.log(body)
      done();
    });
  });
});

it('should throw an error if the team members details does not match', (done) => {
    const options = {
       body:  {
           fullname: "Yoni Bitew",
            role: "Founder",
            image: "https://www.iconsdb.com/icons/preview/red/administrator-xxl.png",
            description: "This is a test description for testing API new added",
            lang: "english"
        },
      json: true,
      url:  `${LOCAL_URL}/team/edit/614b9fa0df92314c81d69f06`
    };
    const obj = teamDB.updateTeamDetails;
    this.put.yields(null, obj.failure.res, JSON.stringify(obj.failure.body));
    request.put(options, (err, res, body) => {
      res.statusCode.should.equal(404);
      res.headers['content-type'].should.contain('application/json');
      body = JSON.parse(body);
      body.status.should.eql('error');
      body.message.should.eql('Team memeber details does not exists.');
      done();
    });
  });

  

});



