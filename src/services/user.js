const model = require('../models/user');
const validate = require('../utils/validationFcts');

const findUser = async (email) => {
  const user = await model.findUser(email);
  return user;
};

const newUser = async (name, email, password, role) => {
  validate.newUserBody(name, email, password);
  const userAlreadyExists = await findUser(email);
  if (userAlreadyExists) {
    const error = new Error('Email already registered');
    error.status = 409;
    throw error;
  }
  const result = await model.newUser(name, email, password, role);
  return result;
};

module.exports = {
  newUser,
  findUser,
};