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

module.exports = {
  newUserBody,
  loginBody,
};