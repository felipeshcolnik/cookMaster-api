require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const user = require('./src/controllers/user');
const { error } = require('./src/utils/otherMidlewares');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/user', rescue(user.newUser));
app.post('/login', rescue(user.login));

app.use(error);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));