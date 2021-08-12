const express = require('express');
const router = require('./routes');
const sequelize = require('./config/connection');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(router);

sequalize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('http://localhost:3000'));
  });