// process.env.NODE_ENV = 'test';
const chai = require('chai')
const ChaiHttp = require('chai-http')
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const {planModel} = require('../models/planModel')
const planClass = require("../utils/tests-classes/planClass");

chai.should();

chai.use(ChaiHttp)

describe('create New Plan', (done)=> {

    const fakePlan = {
    title:"This is a header about the five plan",
    description:"This is a description about our five plan incoming with a new details with it",
    markdown:"Backend Rules 5",
    lang:"english"
  };
    it("should add a new plan to the db", async ()=> {
        const {title,description,markdown,lang} = fakePlan;
      const stub = sinon.stub(planModel, "create").returns(fakePlan);
      const plan = new planClass();
      const newPlan = await plan.createNewPlan(title,description,markdown,lang)
      expect(stub.calledOnce).to.be.true;
      expect(newPlan.title).to.equal(title);
      expect(newPlan.description).to.equal(description);
      expect(newPlan.markdown).to.equal(markdown);
      expect(newPlan.lang).to.equal(lang);
      console.log({newPlan:plan})
    });

  });

