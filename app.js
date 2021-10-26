require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const user = require('./src/controllers/user');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/user', user.newUser);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));