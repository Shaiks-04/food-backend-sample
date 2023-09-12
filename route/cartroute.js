const express = require('express');
const userrouter = express.Router();
const { signup,login} = require('../Controller/user_Controller'); 

// Define routes
userrouter.post('/signup', signup);
userrouter.post('/login', login);

module.exports = userrouter;