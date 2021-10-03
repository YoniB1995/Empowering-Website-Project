// process.env.NODE_ENV = 'test';
const chai = require('chai');
const sinon = require('sinon');
const request = require('request');
const cardEmail = require('./cardEmail');
chai.should();

const LOCAL_URL = 'http://localhost:5000';

describe('card to email', () => {
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

  describe('GET /card', () => {
    it('should get all the cards account details from the fake collection', (done) => {
      const obj = cardEmail.getAllCards.success;
      this.get.yields(null, obj.res, JSON.stringify(obj.body));
      request.get(`${LOCAL_URL}/card`, (err, res, body) => {
        res.statusCode.should.equal(200);
        res.headers['content-type'].should.contain('application/json');
        body = JSON.parse(body);
        body.status.should.eql('success');
        body.data[0].should.include.keys('fullName', 'email');
        body.data[0].fullName.should.eql('asalef alena');
        console.log(body.data);
        done();
      });
    });
  });

  describe('GET /card/getCard/:email', () => {
    it('should get card by email', (done) => {
      const obj = cardEmail.getOneCard.success;
      const emailCard = cardEmail.getOneCard.success.body.data[0].email;
      this.get.yields(null, obj.res, JSON.stringify(obj.body));
      request.get(
        `${LOCAL_URL}/card/fullNameCard/${emailCard}`,
        (err, res, body) => {
          res.statusCode.should.equal(200);
          res.headers['content-type'].should.contain('application/json');
          body = JSON.parse(body);
          body.status.should.eql('success');
          body.data[0].should.include.keys('fullName', 'email');
          body.data[0].fullName.should.eql('asalef alena');
          body.data[0].email.should.eql('asalef@gmail.com');
          console.log(body.data);
          done();
        }
      );
    });
  });
});

describe('POST /card/sendEmail', () => {
  it('should send to email', (done) => {
    const options = {
      body: {
       'fullName': 'ron moyal1',
        'email': 'ron@gmail.com',
      },
      json: true,
      url: `${LOCAL_URL}/card/sendEmail`,
    };
    // const obj = cardEmail.sendCard.success;
    // console.log('objone' + obj);
    // this.post.yields(null, obj.res, obj.body);
    // request.post(`${options.body}/card/sendEmail`, (err, res, body) => {
    //   res.headers['content-type'].should.contain('application/json');
    //   res.statusCode.should.equal(200);
    //   body.card.email.should.equal('ron@gmail.com');
    //   done();
    // });
    const obj = cardEmail.sendCard.success
    this.post.yields(null, obj.res, obj.body);
    request.post(
      `${options}/card/sendEmail`,
      () => {
        obj.res.headers['content-type'].should.contain("application/json");
        obj.res.statusCode.should.equal(200)
        res
        // res.statusCode.should.equal(200);
        // body.card.fullName.should.equal("ron moyal")
        done();
  });
});
