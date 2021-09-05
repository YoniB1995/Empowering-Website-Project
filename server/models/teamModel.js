const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamSchema = new Schema({ fullname: String,
  role: String,
  image: String,
  description:String });



const team = mongoose.model('team', teamSchema)
module.exports = team;
