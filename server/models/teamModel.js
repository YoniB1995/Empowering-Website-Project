const mongoose = require('mongoose');

const { Schema } = mongoose;

const personSchema = new Schema({ fullname: String,
  role: String,
  image: String,
  description:String });

const teamSchema = new Schema({
  founders: [{personSchema}],
  managers: [{personSchema}],
  members: [{personSchema}],
  
});


module.exports = mongoose.model('team', teamSchema);
