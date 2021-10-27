const connection = require('./connection');

const newRecipe = async (name, ingredients, preparation, userId) => 
   connection()
    .then((db) => db.collection('recipes').insertOne({ name, ingredients, preparation, userId }))
    .then((result) => ({ id: result.insertedId, name, ingredients, preparation, userId }));

module.exports = {
  newRecipe,
};
