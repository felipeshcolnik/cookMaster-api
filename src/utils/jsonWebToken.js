require('dotenv');
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const config = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign(payload, SECRET, config);

const verifyToken = (token) => jwt.verify(token, SECRET);

module.exports = {
  generateToken,
  verifyToken,
};