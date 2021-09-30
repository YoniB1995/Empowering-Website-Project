
// const { Schema } = mongoose;

// const teamSchema = new Schema({ fullname: String,
//   role: String,
//   image: String,
//   description:String });



// const team = mongoose.model('team', teamSchema)
// module.exports = team;

const mongoose  = require('mongoose');

const Joi = require('joi')

const Joigoose = require('joigoose')(mongoose)

const teamSchema = Joi.object({
  fullname:Joi.string().min(4).max(99).required(),
  role: Joi.string().required(),
  image: Joi.string().min(50).max(400).required(),
  description: Joi.string().min(20).max(400).required()
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