var express = require('express')
var router = express.Router()
var newsController = require('../app/controllers/newsController');

router.use('/',newsController.index)


module.exports = router