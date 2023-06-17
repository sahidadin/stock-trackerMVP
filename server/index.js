require('dotenv').config();
const path = require('path');

const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
const controllers = require('./controllers');

app.get('/', controllers.getStock);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});


// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');

// const app = express()
// app.use(cors());
// app.use(express.json());
// const controllers = require('./controllers');

// app.get('/', controllers.getStock);


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server available at http://localhost:${PORT}`);
// });