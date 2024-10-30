const Joi = require("joi");

const addCharacterJoiSchema = Joi.object({
  nickname: Joi.string().required(),
  real_name: Joi.string().required(),
  origin_description: Joi.string().required(),
  superpowers: Joi.array().items(Joi.string()).required(),
  catch_phrase: Joi.string().required(),
  images: Joi.array().items(Joi.mixed()).required(),
});

const updateCharacterJoiSchema = Joi.object({
  nickname: Joi.string(),
  real_name: Joi.string(),
  origin_description: Joi.string(),
  superpowers: Joi.array().items(Joi.string()),
  catch_phrase: Joi.string(),
  images: Joi.array().items(Joi.mixed()),
});

module.exports = { addCharacterJoiSchema, updateCharacterJoiSchema };
