const router = require('express').Router();
const { Shop } = require('../db');

// // localhost:5000/api/test
// router.get('/test', (req, res) => {
//   res.send('This is a test.');
// });

// // localhost:5000/api/notes
// router.get('/notes', (req, res) => {
//   // Get all the notes and send to the front
// });

// localhost:5000/api/shops -- GET
router.get('/shops', (req, res) => {
  Shop.find({})
    .then(shops => {
      res.json({
        shops: shops
      });
    });
});


// localhost:5000/api/shop -- POST
router.post('/shop', (req, res) => {
  Shop.create({
    name: req.body.name
  }).then(shop => {
    res.json({
      message: 'Shop created successfully!',
      shop: shop
    });
    // res.redirect('/');// Handlebars
  })
});


module.exports = router;










// function routes(app) {
//   app.get('/', (req, res) => {

//   })
// }

// module.exports = routes;