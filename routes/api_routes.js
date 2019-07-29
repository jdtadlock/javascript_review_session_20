const router = require('express').Router();
const { Shop, Coffee } = require('../db');
const { isAuthenticated } = require('../auth');

// // localhost:5000/api/test
// router.get('/test', (req, res) => {
//   res.send('This is a test.');
// });

// // localhost:5000/api/notes
// router.get('/notes', (req, res) => {
//   // Get all the notes and send to the front
// });

// Shop.find({}).deleteMany({}).then(() => console.log('Shops removed.'));
// Coffee.find({}).deleteMany({}).then(() => console.log('Coffee removed.'));

// Shop.find({})
//   .populate('coffees')
//   .then(shops => {
//     console.log(shops);
//   })

// localhost:5000/api/shops -- GET
router.get('/shops', (req, res) => {
  Shop.find({})
    .populate('coffees')
    .then(shops => {
      res.json({
        shops: shops
      });
    });
});


// localhost:5000/api/shop -- POST
router.post('/shop', isAuthenticated, (req, res) => {
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

// localhost:5000/api/coffee -- POST
router.post('/coffee', (req, res) => {
  Shop.findOne({ _id: req.body.shopId })
    .then(shop => {
      let coffee = new Coffee({
        name: req.body.coffee,
        type: req.body.type,
        shopId: shop._id
      });

      shop.coffees.push(coffee);

      coffee.save().then(() => {
        shop.save().then(() => {
          res.send({ success: 1, message: 'Coffee saved successfully!' });
        });
      });
    })
});


module.exports = router;










// function routes(app) {
//   app.get('/', (req, res) => {

//   })
// }

// module.exports = routes;