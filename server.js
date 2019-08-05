require('dotenv').config();
const express = require('express');
const PORT = 5000;
// const apiRoutes = require('./routes/api_routes');
const api_routes = require('./routes/api_routes');
const auth_routes = require('./routes/auth_routes');

const app = express();

// If I want to use Forms to submit to the back, I must have these
// 2 lines
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// localhost:5000/api/<routes>
app.use('/api', api_routes);
// localhost:5000/auth
app.use('/auth', auth_routes);

app.listen(PORT, () => console.log('Listening on port %s', PORT));



// Mongoose CLI






// app.get('/', (req, res) => {
//   res.sendFile(//htmlfile)
// })
// apiRoutes(app);


/*

  Type of Authentication
    - JWT Json Web Tokens
    - Passport

  JSON Web Tokens:
    - Secret - File that has a hashed code/string
    - Routes
      - Register(create a new user in db)
        - Create a token and send to the front
      - Login(check the email/pass and validate they are correct)
        - Create a token and send to the front
    - Front end saves token to either cookie or localStorage
    - isAuthenticated
      - Compare the token to the secret and if it's valid, they
        are logged in
*/
