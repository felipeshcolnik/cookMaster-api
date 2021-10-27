require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const user = require('./src/controllers/user');
const recipe = require('./src/controllers/recipe');
const { error, validateToken } = require('./src/utils/otherMidlewares');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/user', rescue(user.newUser));
app.post('/login', rescue(user.login));
app.post('/recipes', rescue(validateToken), rescue(recipe.newRecipe));

app.use(error);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));