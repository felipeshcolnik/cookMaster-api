require('dotenv');
const jwt = require('jsonwebtoken');
// const { error } = require('./otherMidlewares');

const { SECRET } = process.env;

const config = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign(payload, SECRET, config);

const isValidToken = (token) => {
  if (!token) {
    const error = new Error('Missing authorization Token');
    error.status = 401;
    throw error;
  }
};

const verifyToken = (token) => {
  isValidToken(token);
  try {
    const payload = jwt.verify(token, SECRET);
    return payload;
  } catch (e) {
    e.nessage = 'jwt malformed';
    throw e;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};