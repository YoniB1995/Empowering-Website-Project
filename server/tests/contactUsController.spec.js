// process.env.NODE_ENV = 'test';
const chai = require('chai')
const sinon = require("sinon");
const faker = require("faker");
const request = require('request');
const contactUsDB = require('./contactUsDB');
const should = require("should");
chai.should();

const LOCAL_URL = 'http://localhost:5000';

describe("ContactUs Crud", () => {
	beforeEach(() => {
		this.get = sinon.stub(request, "get");
		this.post = sinon.stub(request, "post");
		this.delete = sinon.stub(request, "delete");
		this.put = sinon.stub(request, "put");
	});

	afterEach(() => {
		request.get.restore();
		request.post.restore();
		request.delete.restore();
		request.put.restore();
	});

	describe("GET /contactUs", () => {
		it("should get all the contact info from the fake collection", (done) => {
			const obj = contactUsDB.getAllContactInformation.success;
			console.log(obj);
			this.get.yields(null, obj.res, obj.body);
			request.get(
				`${LOCAL_URL}/contactUs/getAllContactInformation`,
				(err, res, body) => {
					res.headers["content-type"].should.contain("application/json");
					res.statusCode.should.equal(200);
					body.status.should.eql("success");
					body.data.forEach((contactUs) =>
						contactUs.should.include.keys(
							"date",
							"email",
							"inquiry",
							"content",
							"id"
						)
					);
					console.log(body.data);
					done();
				}
			);
		});

		it("should not get all the contact info from the fake collection", (done) => {
			const obj = contactUsDB.getAllContactInformation.failure;
			console.log(obj);
			this.get.yields(null, obj.res, obj.body);
			request.get(
				`${LOCAL_URL}/contactUs/getAllContactInformation`,
				(err, res, body) => {
					res.headers["content-type"].should.contain("application/js");
					res.statusCode.should.equal(404);
					body.status.should.eql("error");
					body.should.include.keys("status", "message");
					done();
				}
			);
		});
	});
	describe("Post /contactUs/createContactUs", () => {
		it("should add one contact info to fake collection", (done) => {
			const options = {
				body: {
					date: "2020-03-11T22:00:00.000Z",
					email: "liorlsa9@gmail.com",
					inquiry: "website",
					content: "dsadsadsa",
				},
				json: true,
				url: `${LOCAL_URL}/contactUs/createContactUs`,
			};
			const obj = contactUsDB.createContactInformation.success;
			console.log(obj);
			this.post.yields(null, obj.res, obj.body);
			request.post(
				`${options}/contactUs/createContactUs`,
				(err, res, body) => {
					res.headers["content-type"].should.contain("application/json");
					res.statusCode.should.equal(200);
					body.message.should.equal("Contact information added");
					body.data.email.should.equal("liorlsa9@gmail.com")
					done();
				}
			);
		});

		it("should not add one contact info to fake collection", (done) => {
			const options = {
				body: {
					date: "2021-09-28T21:00:00.000Z",
					_id: "61597aaeabef593dc01cb18f",
					email: "liorlsa9@gmail.com",
					inquiry: "website",
					content: "PROJECT",
					iscompleted: true,
					notes: "not sure what is the problem",
					__v: 0
				},
				json: true,
				url: `${LOCAL_URL}/contactUs/createContactUs`,
			};
			const obj = contactUsDB.createContactInformation.failure;
			console.log(obj);
			this.post.yields(null, obj.res, JSON.stringify(obj.body));
			request.post(
				`${LOCAL_URL}/contactUs/createContactUs`,
				(err, res, body) => {
					res.headers["content-type"].should.contain("application/json");
					res.statusCode.should.eql(404);
					body = JSON.parse(body);
					should(body.status).be.eql('error');
					done();
				}
			);
		});
	});

	describe('DELETE /ContactUs', () => {
		const options = {
			body: {
				date: "2020-03-11T22:00:00.000Z",
				email: "liorlsa9@gmail.com",
				inquiry: "website",
				content: "dsadsadsa",
			},
			json: true,
			url: `${LOCAL_URL}/contactUs/deleteContactUs/:id`,
		};
		it('should delete ContactUs details from the fake collection', (done) => {
			const obj = contactUsDB.deleteContactInformation.success;
			this.delete.yields(null, obj.res, JSON.stringify(obj.body));
			request.delete(`${options}/contactUs/deleteContactUs/:id`, (err, res, body) => {
				res.statusCode.should.equal(200);
				res.headers['content-type'].should.contain('application/json');
				body = JSON.parse(body);



				done();
			});
		});

		it('should not delete ContactUs details from the fake collection', (done) => {
			const options = {
				body: {
					date: "2020-03-11T22:00:00.000Z",
					email: "liorlsa9@gmail.com",
					inquiry: "website",
					content: "dsadsadsa",
				},
				json: true,
				url: `${LOCAL_URL}/contactUs/deleteContactUs/:id`,
			};
			const obj = contactUsDB.deleteContactInformation.failure;
			this.delete.yields(null, obj.res, JSON.stringify(obj.body));
			request.delete(`${options}/contactUs/deleteContactUs/:id`, (err, res, body) => {
				res.statusCode.should.equal(404);
				res.headers['content-type'].should.contain('application/json');
				body = JSON.parse(body);
				body.message.should.equal("Cannot delete contact us.");

				done();
			});
		});





	});

	describe('PUT /ContactUs', () => {
		it('should update ContactUs details from the fake collection', (done) => {
			const options = {
				body: {
					_id: "61522199f1510100167f6980",
					email: "liorlsa9@gmail.com",
					inquiry: "website",
					content: "dsadsadsa",
					iscompleted: false,
					notes: "not sure what is the problem",
					date: "2021-09-28T21:00:00.000Z"
				},
				json: true,
				url: `${LOCAL_URL}/contactUs/updateContactUs/:id`,
			};
			const obj = contactUsDB.updateContactInformation.success;
			this.put.yields(null, obj.res, JSON.stringify(obj.body));
			request.put(`${options}/contactUs/updateContactUs/:id`, (err, res, body) => {
				res.statusCode.should.equal(200);
				res.headers['content-type'].should.contain('application/json');
				body = JSON.parse(body);
				body.message.should.equal("contact updated");
				body.data._id.should.eql(options.body._id);
				body.data._id.should.equal(options.body._id);
				body.data.email.should.equal(options.body.email);


				done();
			});
		});

		it('should not update ContactUs details from the fake collection', (done) => {
			const options = {
				body: {
					_id: "61522199f1510100167f6980",
					email: "liorlsa9@gmail.com",
					inquiry: "website",
					content: "dsadsadsa",
					iscompleted: false,
					notes: "not sure what is the problem",
					date: "2021-09-28T21:00:00.000Z"
				},
				json: true,
				url: `${LOCAL_URL}/contactUs/updateContactInformation/:id`,
			};
			const obj = contactUsDB.updateContactInformation.failure;
			this.put.yields(null, obj.res, JSON.stringify(obj.body));
			request.put(`${options}/contactUs/updateContactInformation/:id`, (err, res, body) => {
				res.statusCode.should.equal(404);
				res.headers['content-type'].should.contain('application/json');
				body = JSON.parse(body);
				body['status'].should.eql("error");
				body.message.should.equal("failed to update contact information");
				done();
			});
		});

	});
	describe('GET /ContactUs/getContactInformation/:id', () => {
		it('should get a getContactInformation by choice from the fake ContactInformation db collection', (done) => {
			const obj = contactUsDB.getContactInformation.success;
			const contactID = contactUsDB.getContactInformation.success.body.data._id;
			this.get.yields(null, obj.res, JSON.stringify(obj.body));
			request.get(`${LOCAL_URL}/contactUs/getContactInformation/${contactID}`, (err, res, body) => {
				res.statusCode.should.eql(200);
				res.headers['content-type'].should.contain('application/json');
				body = JSON.parse(body);
				body.data.email.should.eql("liorlsa9@gmail.com");

				done();
			});
		});
		it('should not get contact details from DB', (done) => {
			const obj = contactUsDB.getContactInformation.failure;
			this.get.yields(null, obj.res, JSON.stringify(obj.body));
			request.get(`${LOCAL_URL}/contactUs/getContactInformation/6133bca1faebadas48f88b83231`, (err, res, body) => {
				res.statusCode.should.equal(500);
				res.headers['content-type'].should.contain('application/json');
				body = JSON.parse(body);
				body.status.should.eql('error');
				body.message.should.eql('Server Error.');
				done();
			});
		});
	});

});
