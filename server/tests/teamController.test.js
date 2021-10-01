// process.env.NODE_ENV = 'test';
const chai = require("chai");
const ChaiHttp = require("chai-http");
// const server = require('../server')
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const { teamModel } = require("../models/teamModel");
const teamMembership = require("../utils/tests-classes/teamClass");

chai.should();

chai.use(ChaiHttp);
describe("Team Crud", () => {
	describe("create Team Member", (done) => {
		const fakeMember = {
			fullname: "Yoni Bitew",
			image: faker.image,
			role: "Volunteer",
			description: "faker.fake.name.length(100)",
			lang: "eng",
		};
		it("should add a new user to the db", async () => {
			const stub = sinon.stub(teamModel, "create").returns(fakeMember);
			const TEAMMemberShip = new teamMembership();
			const user = await TEAMMemberShip.create(
				fakeMember.fullname,
				fakeMember.description
			);
			expect(stub.calledOnce).to.be.true;
			//   expect(user.id).to.equal(fakeMember.id);
			expect(user.fullname).to.equal("yoni");
			//   expect(user.image).to.equal(fakeMember.image);
			//   expect(user.role).to.equal(fakeMember.role);
			expect(user.description).to.equal(fakeMember.description);
			//   expect(user.lang).to.equal(fakeMember.lang);
		});
	});

	describe(" Delete Team Member", () => {
		const fakeMember = {
			_id: "1235fsaass",
			fullname: "Yoni Bitew",
			image: faker.image,
			role: "Volunteer",
			description: "faker.fake.name.length(100)",
			lang: "eng",
		};
		it.only("should delete user to the db", async () => {
			const stub = sinon
				.stub(teamModel, "findByIdAndDelete")
				.returns(fakeMember);
			const TEAMMemberShip = new teamMembership();
			const user = await TEAMMemberShip.deleteUser(fakeMember._id);
			expect(stub.calledOnce).to.be.true;
			expect(user._id).to.equal(fakeMember._id);
			expect(user.fullname).to.equal("Yoni Bitew");
			expect(user.role).to.equal(fakeMember.role);
			expect(user.description).to.equal(fakeMember.description);
			expect(user.lang).to.equal(fakeMember.lang);
		});
	});
});
