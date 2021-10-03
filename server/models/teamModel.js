const mongoose = require('mongoose');

const Joi = require('joi');

const Joigoose = require('joigoose')(mongoose);

const teamSchema = Joi.object({
  fullname: Joi.string().min(2).max(99).required(),
  role: Joi.string().required(),
  image: Joi.string().min(5).max(400).required(),
  description: Joi.string().min(20).max(400).required(),
  lang: Joi.string().min(3).max(10).required(),
});

const validTeam = (team) => {
  const teamJoi = teamSchema.validate(team);
  return teamJoi;
};

const teamMongooseSchema = mongoose.Schema(Joigoose.convert(teamSchema));

const teamModel = mongoose.model('team', teamMongooseSchema);

module.exports = {
  validTeam,
  teamModel,
};
