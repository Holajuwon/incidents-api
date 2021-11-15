const Joi = require("joi");

exports.createUserShema = {
  schema: Joi.object().keys({
    email: Joi.string().email().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().required(),
  }),
  message: "Error creating user",
};

exports.loginUserSchema = {
  schema: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
  message: "Error logging user in",
};
