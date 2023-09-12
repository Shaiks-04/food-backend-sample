const express = require('express');
const reciperouter = express.Router();
const {fetch,insert}=require('../Controller/food_Controller')

reciperouter.post('/insert', insert);
reciperouter.get('/fetch/:category',fetch)

module.exports=reciperouter