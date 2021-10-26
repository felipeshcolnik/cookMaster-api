const connection = require('./connection');

const newUser = async (name, email, password, role) => {
  connection()
    .then((db) => db.collection('users').insertOne({ name, email, password, role }))
    .then((result) => result.ops[0]);
};

module.exports = { 
  newUser,
 };