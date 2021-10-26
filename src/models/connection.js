const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/cookmaster_db';
const DB_NAME = 'cookmaster_db';

let db = null;

async function connection() {
  if (db) return Promise.resolve(db);
  return MongoClient.connect(MONGO_DB_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((connect) => connect.db(DB_NAME))
    .then((database) => {
      db = database;
      return db;
    });
}

module.exports = connection;