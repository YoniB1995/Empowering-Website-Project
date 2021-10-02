// process.env.NODE_ENV = 'test';
const server = require("../server");
const chai = require("chai");
const ChaiHttp = require("chai-http");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const { campaginModel } = require("../models/campaginModel");
const campaginClass = require("../utils/tests-classes/campaginClass");

chai.should();

chai.use(ChaiHttp);

describe("Get all campagins", (done) => {
	it.only("should get all campagins from mailChimp and desturct arcivhe url", async (done) => {
		chai
			.request(server)
			.get("/campagin/getCampaignsSorted")
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(res.body.sortedCampagins[0]).to.be.have.property("title");
			});
		done();
	});
});
