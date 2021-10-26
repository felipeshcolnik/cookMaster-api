const model = require('../models/user');

const newUser = async (name, email, password, role) => {
  const result = await model.newUser(name, email, password, role);
  return result;
};

module.exports = {
  newUser,
};