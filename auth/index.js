const secret = process.env.SECRET;
const jwt = require('jsonwebtoken');

function generateToken(id) {
  let token = jwt.sign({ userId: id }, secret);

  return token;
}

function isAuthenticated(req, res, next) {
  if (req.headers.auth_token) {
    let token = req.headers.auth_token;

    jwt.verify(token, secret, (err, data) => {
      if (err) return res.status(401).send({ message: 'You are not authorized to access this data' });

      next();
    });
  } else res.status(401).send({ message: 'You are not authorized to add a shop.' });

}


module.exports = {
  generateToken,
  isAuthenticated
}