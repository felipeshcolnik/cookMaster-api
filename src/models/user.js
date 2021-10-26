const connection = require('./connection');

const findUser = async (email) => {
  connection()
    .then((db) => db.collection('users').findOne({ email }))
    .then((result) => result);
};

const newUser = async (name, email, password, role) => {
  connection()
    .then((db) => db.collection('users').insertOne({ name, email, password, role }))
    .then((result) => result.ops[0]);
};

module.exports = { 
  findUser,
  newUser,
 };