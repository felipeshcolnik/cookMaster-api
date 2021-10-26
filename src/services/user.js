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

const login = async (email, password) => {
  if (!email || !password) {
    const error = new Error('All fields must be filled');
    error.status = 401;
    throw error;
  }
  const user = await findUser(email);
  if (!user || user.password !== password) {
    const error = new Error('Password or Email is not correct');
    error.status = 401;
    throw error;
  }
  return true;
};

module.exports = {
  newUser,
  findUser,
  login,
};