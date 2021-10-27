const service = require('../services/recipe');

const newRecipe = async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  const { _id } = req.user;
  const result = await service.newRecipe(name, ingredients, preparation, _id);
  return res.status(201).json(result);
};

module.exports = {
  newRecipe,
};