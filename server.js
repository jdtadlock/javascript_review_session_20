const express = require('express');
const PORT = 5000;
// const apiRoutes = require('./routes/api_routes');
const api_routes = require('./routes/api_routes');

const app = express();

// If I want to use Forms to submit to the back, I must have these
// 2 lines
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// localhost:5000/api/<routes>
app.use('/api', api_routes);

app.listen(PORT, () => console.log('Listening on port %s', PORT));



// Mongoose CLI






// app.get('/', (req, res) => {
//   res.sendFile(//htmlfile)
// })
// apiRoutes(app);
