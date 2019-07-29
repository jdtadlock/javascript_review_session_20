const secret = process.env.SECRET;
const jwt = require('jsonwebtoken');

function generateToken(id) {
  let token = jwt.sign({ userId: id }, secret);

  console.log(token);
}

function isAuthenticated(req, res, next) {
  let token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, secret, (err, data) => {
    if (err) return res.status(401).send({ message: 'You are not authorized to access this data' });

    next();
  });
}


module.exports = {
  generateToken,
  isAuthenticated
}