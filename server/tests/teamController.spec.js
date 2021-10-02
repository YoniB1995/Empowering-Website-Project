// process.env.NODE_ENV = 'test';
const chai = require("chai");
const ChaiHttp = require("chai-http");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const { teamModel } = require("../models/teamModel");
const teamMembership = require("../utils/tests-classes/teamClass");

chai.should();

chai.use(ChaiHttp);

describe("create Team Member", (done) => {
	const fakeMember = {
		fullname: "Yoni Bitew",
		image:
			"https://www.thezamarrinstitute.org/wp-content/uploads/2016/07/no-profile-img-221x300.gif",
		role: "Volunteer",
		description: "this is a test description and it should work validation",
		lang: "eng",
	};
	it("should add a new user to the db", async () => {
		const stub = sinon.stub(teamModel, "create").returns(fakeMember);
		const TEAMMemberShip = new teamMembership();
		const user = await TEAMMemberShip.create(
			fakeMember.fullname,
			fakeMember.description,
			fakeMember.image,
			fakeMember.role,
			fakeMember.lang
		);
		expect(stub.calledOnce).to.be.true;
		expect(user.fullname).to.equal(fakeMember.fullname);
		expect(user.image).to.equal(fakeMember.image);
		expect(user.role).to.equal(fakeMember.role);
		expect(user.description).to.equal(fakeMember.description);
		expect(user.lang).to.equal(fakeMember.lang);
		console.log({ newMember: user });
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
		it("should delete user to the db", async () => {
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
