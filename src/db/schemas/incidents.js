const Joi = require("joi");

exports.createIncidentSchema = {
  schema: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  }),
  message: "Error creating incident",
};
