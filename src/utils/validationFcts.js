const Joi = require('joi');

const newUserBody = (name, email, password) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).validate({ name, email, password });
  if (error) throw error;
};

const loginBody = (email, password) => {
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate({ email, password });
  if (error) throw error;
};

const newRecipeBody = (name, ingredients, preparation) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    ingredients: Joi.string().required(),
    preparation: Joi.string().required(),
  }).validate({ name, ingredients, preparation });
  if (error) throw error;
};

module.exports = {
  newUserBody,
  loginBody,
  newRecipeBody,
};