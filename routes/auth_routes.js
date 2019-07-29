const router = require('express').Router();
const { User } = require('../db');
const { generateToken } = require('../auth');


generateToken(5);

router.post('/register', (req, res) => {

});

module.exports = router;