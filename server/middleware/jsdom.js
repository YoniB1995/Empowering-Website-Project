/* eslint-disable func-names */
const marked = require('marked');

const slugify = require('slugify');

const createDomPurify = require('dompurify');

const { JSDOM } = require('jsdom');

const planSchema = require('../models/planModel');

const dompurify = createDomPurify(new JSDOM().window);

const jsdomCheck = () => {
  planSchema.pre('validate', function (next) {
    if (this.title) {
      this.slug = slugify(this.title, { lower: true, strict: true });
    }

    if (this.markdown) {
      this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
    }

    next();
  });
};

module.exports = jsdomCheck;
