// process.env.NODE_ENV = 'test';
const chai = require('chai')
const ChaiHttp = require('chai-http')
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const {adminModel} = require('../models/adminModel')
const adminClass = require("../utils/tests-classes/adminClass");

chai.should();

chai.use(ChaiHttp)

describe('create New Admin', (done)=> {

    const fakeAdmin = {
    email:"yonatansamfisher@gmail.com",
    password:"12345678"
  };
    it("should add a new plan to the db", async ()=> {
    const {email,password} = fakeAdmin;
      const stub = sinon.stub(adminModel, "create").callArgWith('Bearer Token');
      const admin = new adminClass();
      const newAdmin = await admin.createNewAdmin(email,password)
      
    //   expect(stub.calledOnce).to.be.true;
      expect(stub).to.call('Bearer Token')
      
      console.log({newAdmin:newAdmin})
    });

  });

