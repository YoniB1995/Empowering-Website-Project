

const mongoose  = require('mongoose');

const Joi = require('joi')

const Joigoose = require('joigoose')(mongoose)

const teamSchema = Joi.object({
  role: Joi.string() ,
  image: Joi.string(),
  description: Joi.string()
})

const validTeam = (team) =>{
  const teamJoi =  teamSchema.validate(team)
  return teamJoi;
}

const teamMongooseSchema = mongoose.Schema(Joigoose.convert(teamSchema))

const teamModel = mongoose.model('team',teamMongooseSchema)

module.exports = {
  validTeam,
  teamModel
}