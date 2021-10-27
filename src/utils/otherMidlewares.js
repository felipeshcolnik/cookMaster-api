const { verifyToken } = require('./jsonWebToken');

const error = (err, _req, res, _next) => {
  if (err.isJoi) return res.status(400).json({ message: err.message });
  if (err.status) return res.status(err.status).json({ message: err.message });
};

const validateToken = (req, _res, next) => {
  const { authorization } = req.headers;
  const payload = verifyToken(authorization);
  req.user = payload;
  next();
};

module.exports = {
  error,
  validateToken,
};