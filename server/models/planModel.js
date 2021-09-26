/* eslint-disable func-names */
// const marked = require("marked");
// const slugify = require("slugify");
// const mongoose = require("mongoose");
// const createDomPurify = require("dompurify");
// const { JSDOM } = require("jsdom");

// const dompurify = createDomPurify(new JSDOM().window);

// const planSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   markdown: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   }
//   // ,
//   // slug: {
//   //   type: String,
//   //   required: true,
//   //   unique: true,
//   // },
//   // sanitizedHtml: {
//   //   type: String,
//   //   required: true,
//   // },
// });

// // planSchema.pre('validate', function (next) {
// //   if (this.title) {
// //     this.slug = slugify(this.title, { lower: true, strict: true });
// //   }

// //   if (this.markdown) {
// //     this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
// //   }

// //   next();
// // });

// const planModel = mongoose.model('plan', planSchema);

// module.exports = planModel;
// ///////////////////////////////////////

const marked = require("marked");
const slugify = require("slugify");
const mongoose = require("mongoose");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const Joi = require("joi");

const joigoose = require("joigoose")(mongoose);

const dompurify = createDomPurify(new JSDOM().window);

const planSchema = Joi.object({
  title: Joi.string()
  .min(5)
  .max(99)
  .required(),
  description: Joi.string()
  .required(),
  markdown: Joi.string()
  .required(),
  createdAt: Joi.date(),
});

const validPlan = (plan) => {
  const planJoi = planSchema.validate(plan);
  return planJoi;
};

const planMongooseSchema = new mongoose.Schema(joigoose.convert(planSchema));

const planModel = mongoose.model("plan", planMongooseSchema);

module.exports = {
  validPlan,
  planModel
};
