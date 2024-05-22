const Joi = require("joi");

const addSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  img: Joi.string(),
  coordinates: Joi.string(),
});

module.exports = {
  addSchema,
};
