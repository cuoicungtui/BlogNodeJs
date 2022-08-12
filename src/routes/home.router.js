var express = require('express');
var router = express.Router();
var homeController = require('../app/controllers/homeController');

router.use('/',homeController.index)

module.exports = router