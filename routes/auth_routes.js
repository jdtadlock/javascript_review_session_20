const router = require('express').Router();
const { User } = require('../db');
const { isAuthenticated, generateToken } = require('../auth');


// generateToken(5);


// User must exist and be logged in to create a shop or coffee

// Every auth route will return a token to the front
// Generated hashed string that can only decrypted by the secret on 
// our backend

// User Register Route
// localhost:5000/auth/register -- POST

// User.deleteMany({}).then(() => console.log('users deleted'));

router.post('/register', (req, res) => {
  User.create(req.body)
    .then(user => {
      req.user = user._id;
      res.send({
        token: generateToken(user._id)
      });
    }).catch(err => res.status(500).send({ message: err }));
});

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) return res.status(500).send({ message: 'That email is not registered with a user.' });

      if (user.validatePassword(req.body.password)) {
        return res.send({
          token: generateToken(user._id)
        });
      }

      return res.status(401).send({ message: 'You typed in the wrong password.' });
    })
});


router.get('/isauth', isAuthenticated, (req, res) => {
  res.send({ message: 'Authentication verifed!' });
});




module.exports = router;