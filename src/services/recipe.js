const model = require('../models/recipe');
const validate = require('../utils/validationFcts');

const newRecipe = async (name, ingredients, preparation, userId) => {
  validate.newRecipeBody(name, ingredients, preparation);
  const result = await model.newRecipe(name, ingredients, preparation, userId);
  return result;
};

module.exports = {
  newRecipe,
};