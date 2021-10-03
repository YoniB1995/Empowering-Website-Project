const request = require("request");
const LOCAL_URL = "http://localhost:5000";
const chai = require("chai");
const ChaiHttp = require("chai-http");
const sinon = require("sinon");
const expect = chai.expect;
const contactUsDB = require("./contactUsDB");

chai.should();

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

	// describe("GET /contactUs", () => {
	// 	it("should get all the contact info from the fake collection", (done) => {
	// 		const obj = contactUsDB.getAllContactInformation.success;
	// 		console.log(obj);
	// 		this.get.yields(null, obj.res, obj.body);
	// 		request.get(
	// 			`${LOCAL_URL}/contactUs/getAllContactInformation`,
	// 			(err, res, body) => {
	// 				res.headers["content-type"].should.contain("application/json");
	// 				res.statusCode.should.equal(200);
	// 				body.status.should.eql("success");
	// 				body.data.forEach((contactUs) =>
	// 					contactUs.should.include.keys(
	// 						"date",
	// 						"email",
	// 						"inquiry",
	// 						"content",
	// 						"id"
	// 					)
	// 				);
	// 				console.log(body.data);
	// 				done();
	// 			}
	// 		);
	// 	});

	// 	it("should not get all the contact info from the fake collection", (done) => {
	// 		const obj = contactUsDB.getAllContactInformation.failure;
	// 		console.log(obj);
	// 		this.get.yields(null, obj.res, obj.body);
	// 		request.get(
	// 			`${LOCAL_URL}/contactUs/getAllContactInformation`,
	// 			(err, res, body) => {
	// 				res.headers["content-type"].should.contain("application/js");
	// 				res.statusCode.should.equal(404);
	// 				body.status.should.eql("error");
	// 				body.should.include.keys("status", "message");
	// 				done();
	// 			}
	// 		);
	// 	});
	// });
	// describe("Post /contactUs/createContactUs", () => {
	// 	it("should add one contact info to fake collection", (done) => {
	// 		const options = {
	// 			body: {
	// 				date: "2020-03-11T22:00:00.000Z",
	// 				email: "liorlsa9@gmail.com",
	// 				inquiry: "website",
	// 				content: "dsadsadsa",
	// 			},
	// 			json: true,
	// 			url: `${LOCAL_URL}/contactUs/createContactUs`,
	// 		};
	// 		const obj = contactUsDB.createContactInformation.success;
	// 		console.log(obj);
	// 		this.post.yields(null, obj.res, obj.body);
	// 		request.post(
	// 			`${options}/contactUs/getAllContactInformation`,
	// 			(err, res, body) => {
	// 				res.headers["content-type"].should.contain("application/json");
	// 				res.statusCode.should.equal(200);
	// 				body.data.should.equal("Contact information added");
                    
	// 				done();
	// 			}
	// 		);
	// 	});

	// 	it("should not add one contact info to fake collection", (done) => {
	// 		const options = {
	// 			body: {
	// 				date: "2020-03-11T22:00:00.000Z",
	// 				email: "liorlsa9@gmail.com",
	// 				inquiry: "website",
					
	// 			},
	// 			json: true,
	// 			url: `${LOCAL_URL}/contactUs/createContactUs`,
	// 		};
	// 		const obj = contactUsDB.createContactInformation.failure;
	// 		console.log(obj);
	// 		this.post.yields(null, obj.res, obj.body);
	// 		request.post(
	// 			`${options}/contactUs/getAllContactInformation`,
	// 			(err, res, body) => {
	// 				res.headers["content-type"].should.contain("application/json");
	// 				res.statusCode.should.equal(404);

	// 				done();
	// 			}
	// 		);
	// 	});
	// });

	describe('DELETE /ContactUs', () => {
		  it.only('should get delete ContactUs details from the fake collection', (done) => {
		    const obj = contactUsDB.deleteContactInformation.success;
			const contactID = "61522199f1510100167111f6980";
		    this.delete.yields(null, obj.res, obj.body);
		    request.delete(`${LOCAL_URL}/contactUs/deleteContactUs/:id`, (err, res, body) => {
		      res.statusCode.should.equal(200);
		      res.headers['content-type'].should.contain('application/json');
		      body.status.should.equal("success");
		      body.data.should.have.property("message");
		      body.data.message.should.equal("contact deleted");
             
		      done();
		    });
		  });

		  it.only('should get delete ContactUs details from the fake collection', (done) => {
		    const obj = contactUsDB.deleteContactInformation.failure;
			const contactID = "61522199f1510100167111f6980";
		    this.delete.yields(null, obj.res, obj.body);
		    request.delete(`${LOCAL_URL}/contactUs/deleteContactUs/:id`, (err, res, body) => {
		      res.statusCode.should.equal(404);
		      res.headers['content-type'].should.contain('application/json');
		      body.status.should.equal("failure");
		      body.data.should.have.property("message");
		      body.data.message.should.equal("contact deleted");
             
		      done();
		    });
		  });

		  
		

		
		});
});
