// process.env.NODE_ENV = 'test';
// const chai = require("chai");
// const ChaiHttp = require("chai-http");
// const sinon = require("sinon");
// const expect = chai.expect;
// const faker = require("faker");
// const { planModel } = require("../models/planModel");
// const planClass = require("../utils/tests-classes/planClass");

// chai.should();

// chai.use(ChaiHttp);

// describe("create New Plan", (done) => {
// 	const fakePlan = {
// 		title: "This is a header about the five plan",
// 		description:
// 			"This is a description about our five plan incoming with a new details with it",
// 		markdown: "Backend Rules 5",
// 		lang: "english",
// 	};
// 	it("should add a new plan to the db", async () => {
// 		const { title, description, markdown, lang } = fakePlan;
// 		const stub = sinon.stub(planModel, "create").returns(fakePlan);
// 		const plan = new planClass();
// 		const newPlan = await plan.createNewPlan(
// 			title,
// 			description,
// 			markdown,
// 			lang
// 		);

// 		expect(stub.calledOnce).to.be.true;
// 		expect(newPlan.title).to.equal(title);
// 		expect(newPlan.description).to.equal(description);
// 		expect(newPlan.markdown).to.equal(markdown);
// 		expect(newPlan.lang).to.equal(lang);
// 		console.log({ newPlan: plan });
// 	});
// });

// describe("Delete plan by id", () => {
// 	const fakePlan = {
// 		_id: "12321ffsa",
// 		title: "This is a header about the five plan",
// 		description:
// 			"This is a description about our five plan incoming with a new details with it",
// 		markdown: "Backend Rules 5",
// 		lang: "english",
// 	};
// 	it.only("should delete plan from the db", async () => {
// 		const id = "12321ffsa";
// 		const stub = sinon.stub(planModel, "findByIdAndDelete").returns(fakePlan);
// 		const plan = new planClass();
// 		const deletedPlan = await plan.deletePlan(id);
// 		expect(stub.calledOnce).to.be.true;
// 		expect(deletedPlan._id).to.equal(id);
// 		expect(deletedPlan.title).to.equal(fakePlan.title);
// 		expect(deletedPlan.description).to.equal(fakePlan.description);
// 		expect(deletedPlan.markdown).to.equal(fakePlan.markdown);
// 		expect(deletedPlan.lang).to.equal(fakePlan.lang);
// 		console.log(deletedPlan.lang, fakePlan.lang);
// 	});
// });

// hana branch
const chai = require("chai");
const sinon = require("sinon");
const request = require("request");
const planDB = require("./planDB");

chai.should();

const LOCAL_URL = "http://localhost:5000";

describe("plan crud", () => {
    beforeEach(() => {
        this.get = sinon.stub(request, "get");
        this.post = sinon.stub(request, "post");
        this.put = sinon.stub(request, "put");
    });
    afterEach(() => {
        request.get.restore();
        request.post.restore();
        request.put.restore();
    });

    describe("GET /plans", () => {
        it("get all the plans details from the fake collection", (done) => {
            const obj = planDB.getAllPlansHebrew.success;
            this.get.yields(null, obj.res, obj.body);
            request.get(`${LOCAL_URL}/plans/all/hebrew`, (err, res, body) => {
                res.statusCode.should.equal(200);
                res.headers["content-type"].should.contain("application/json");
                // body = JSON.parse(body);
                body.status.should.eql("success");
                body.data[0].should.include.keys("title", "description", "markdown");
                console.log(body.data);
                done();
            });
        });
        describe("GET /plans", () => {
            it("get all the plans details from the fake collection", (done) => {
                const obj = planDB.getAllPlansEnglish.success;
                this.get.yields(null, obj.res, obj.body);
                request.get(`${LOCAL_URL}/plans/all/english`, (err, res, body) => {
                    res.statusCode.should.equal(200);
                    res.headers["content-type"].should.contain("application/json");
                    // body = JSON.parse(body);
                    body.status.should.eql("success");
                    body.data[0].should.include.keys("title", "description", "markdown");
                    console.log(body.data);
                    done();
                });
                // it('should throw an error if the admin details does not exist', (done) => {
                //   const obj = planDB.getAllPlansEnglish.failure;
                //   this.get.yields(null, obj.res, JSON.stringify(obj.body));
                //   request.get(`${LOCAL_URL}/plans/plans/all/english`, (err, res, body) => {
                //     res.statusCode.should.equal(404);
                //     res.headers['content-type'].should.contain('application/json');
                //     body = JSON.parse(body);
                //     body.status.should.eql('error');
                //     body.message.should.eql('That plan does not exist.');
                //     done();
                //   });
            });
            describe("GET /plans", () => {
                it("get one the plan details from the fake collection", (done) => {
                    const obj = planDB.getOnePlan.success;
                    this.get.yields(null, obj.res, obj.body);
                    request.get(`${LOCAL_URL}/plan`, (err, res, body) => {
                        res.statusCode.should.equal(200);
                        res.headers["content-type"].should.contain("application/json");

                        body.status.should.eql("success");
                        body.data[0].should.include.keys(
                            "title",
                            "description",
                            "markdown"
                        );
                        console.log(body.data);
                        done();
                    });
                });

                describe("GET /plans", () => {
                    it("get one the plan details from the fake collection", (done) => {
                        const obj = planDB.createPlan.success;
                        this.get.yields(null, obj.res, obj.body);
                        request.get(`${LOCAL_URL}/plan`, (err, res, body) => {
                            res.statusCode.should.equal(201);
                            res.headers["content-type"].should.contain("application/json");

                            body.status.should.eql("success");
                            body.data[0].should.include.keys(
                                "title",
                                "description",
                                "description",
                                "markdown"
                            );
                            console.log(body.data);
                            done();
                        });
                    });
                });
            });
        });
    });
});
// })
