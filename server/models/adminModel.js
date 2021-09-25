const mongoose = require('mongoose');

const Joi = require("joi");

const joigoose = require("joigoose")(mongoose);
const adminSchema = Joi.object({
  username: Joi.string()
  .min(4)
  .max(199)
  .required(),
  password: Joi.string()
  .min(6)
  .max(15)
  .required()
  // password_confirmation: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
 ,
//  return res.json( validBody.error.details[0].message).status(400)

<<<<<<< HEAD
  email: Joi.string()
  .email()
  .min(5)
  .max(99)
  .required()
  
})


const validAdmin = (admin)=>{
  const adminJoi = adminSchema.validate(admin)
  return adminJoi
}

const adminMongoose = new mongoose.Schema(joigoose.convert(adminSchema))

const adminModel = mongoose.model('admin',adminMongoose)

module.exports={
  validAdmin,
  adminModel
}
=======
const adminSchema = Joi.object(
	{
		username: Joi.string().min(4).max(199).required(),
		password: Joi.string()
			// .regex('/^[a-2A-Z0-9],{3,30}/')
			.min(6)
			.max(100)
			.required(),
		// password_confirmation: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
		email: Joi.string()
			.email()
			.min(5)
			.max(99)
			// .regex('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$')
			.required(),
	}
);

const validAdmin = (admin) => {
	const adminJoi = adminSchema.validate(admin);
	return adminJoi;
};

const adminMongoose = new mongoose.Schema(joigoose.convert(adminSchema));

const adminModel = mongoose.model("admin", adminMongoose);

module.exports = {
	validAdmin,
	adminModel
};
>>>>>>> d88b2420d03e0bfb43d9a8a1254b5ed63284a767
