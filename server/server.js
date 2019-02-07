const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000; // heroku------

var app = express();

app.use(express.static(publicPath)); // middleware------

app.listen(port, () => {
  console.log(`Server is up on port 3000', ${port}`);
});

// const express = require('express');
// const path = require('path');
//
// const publicPath = path.join(__dirname, '../public');
//
// var app = express();
//
// app.use(express.static(publicPath));
//
// app.listen(3000, () => {
//   console.log('Server is up on port 300')
// });
