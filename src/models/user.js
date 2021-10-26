const connection = require('./connection');

const findUser = async (email) => 
  connection()
    .then((db) => db.collection('users').findOne({ email }))
    .then((result) => result);

const newUser = async (name, email, password, role) => 
   connection()
    .then((db) => db.collection('users').insertOne({ name, email, password, role }))
    .then((result) => ({ id: result.insertedId, name, email, role }));

module.exports = { 
  findUser,
  newUser,
 };