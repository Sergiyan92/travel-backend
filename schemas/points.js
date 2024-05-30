const Joi = require("joi");

const addSchema = Joi.object({
  title: Joi.string(),
  descr: Joi.string(),
  img: Joi.string(),
  coordinates: Joi.array(),
});

module.exports = {
  addSchema,
};
