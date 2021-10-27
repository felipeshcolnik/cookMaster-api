const model = require('../models/user');
const validate = require('../utils/validationFcts');
const jwt = require('../utils/jsonWebToken');

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

const login = async (email, pass) => {
  if (!email || !pass) {
    const error = new Error('All fields must be filled');
    error.status = 401;
    throw error;
  }
  const user = await findUser(email);
  if (!user || user.password !== pass) {
    const error = new Error('Incorrect email or password');
    error.status = 401;
    throw error;
  }
  const { password, ...payload } = user;
  return jwt.generateToken(payload);
};

module.exports = {
  newUser,
  findUser,
  login,
};