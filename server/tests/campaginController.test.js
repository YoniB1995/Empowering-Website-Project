const chai = require("chai");
const ChaiHttp = require("chai-http");
const server = require("../server");

chai.should();

chai.use(ChaiHttp);

describe("Campagins API Controller", (done) => {
	describe("GET /campagin/getCampaignsSorted", () => {
		it("it should get all campagins from mailchimp", (done) => {
			chai
				.request(server)
				.get("/campagin/getCampaignsSorted")
				.end((err, response) => {
					response.should.have.status(200);
					response.body.should.be.a("object");
					response.body.should.have.property("sortedCampagins");

					done();
				});
		});

		it("it should NOT get all campagins from mailchimp", (done) => {
			chai
				.request(server)
				.get("/campagin/getCampaignsSorted1")
				.end((err, response) => {
					response.should.have.status(404);
					done();
				});
		});
	});

	describe("GET /campagin/getCampaignByTitle", () => {
		it("it should get one campagin from mailchimp", (done) => {
			const title = "Webhook check2";
			chai
				.request(server)
				.get("/campagin/getCampaignByTitle/" + title)
				.end((err, response) => {
					response.should.have.status(200);
					response.body.should.be.a("object");
					response.body.should.have.property("report_summary");
					done();
				});
		});

		it("it should NOT get all campagins from mailchimp", (done) => {
			chai
				.request(server)
				.get("/campagin/getCampaignsSorted1")
				.end((err, response) => {
					response.should.have.status(404);
					done();
				});
		});
	});

	describe("GET /campagin/getCampaignByTitle", () => {
		it("it should get one campagin from mailchimp", (done) => {
			const title = "Webhook check2";
			chai
				.request(server)
				.get("/campagin/getCampaignByTitle/" + title)
				.end((err, response) => {
					response.should.have.status(200);
					response.body.should.be.a("object");
					response.body.should.have.property("report_summary");
					response.body.should.have.property();
					done();
				});
		});

		it("it should NOT get one campagin from mailchimp", (done) => {
			chai
				.request(server)
				.get("/campagin/getCampaignByTitle1/dsa")
				.end((err, response) => {
					response.should.have.status(404);
					done();
				});
		});
	});
});
