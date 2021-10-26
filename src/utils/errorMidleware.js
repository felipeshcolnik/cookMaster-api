const error = (err, _req, res, _next) => {
  if (err.isJoi) return res.status(400).json({ message: err.message });
  if (err.status) return res.status(err.status).json({ message: err.message });
};

module.exports = error;