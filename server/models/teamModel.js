// const mongoose = require('mongoose');

// const { Schema } = mongoose;

<<<<<<< HEAD
// const teamSchema = new Schema({ fullname: String,
//   role: String,
//   image: String,
//   description:String });
=======
const teamSchema = new Schema({ fullname: String,
  role: String,
  image: String,
  description:String,
lang:String });
>>>>>>> d88b2420d03e0bfb43d9a8a1254b5ed63284a767



// const team = mongoose.model('team', teamSchema)
// module.exports = team;

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