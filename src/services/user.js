const model = require('../models/user');
const validate = require('../utils/validationFcts');

const newUser = async (name, email, password, role) => {
  validate.newUserBody(name, email, password);
  const result = await model.newUser(name, email, password, role);
  console.log(result);
  return result;
};

module.exports = {
  newUser,
};