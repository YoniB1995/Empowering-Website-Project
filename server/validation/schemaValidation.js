const joi = require('joi');

exports.validteam = (bodyData) => {
  const joiSchema = joi.object({
    email: joi.string().min().max().required(),
    inquiry: joi.string().min().max().required(),
    content: joi.string().min().max().required(),
    iscompleted:joi.boolean(),
    notes: joi.string().min().max()

  });
  return joiSchema.validate(bodyData);
};
