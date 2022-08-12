var express = require('express')
var router = express.Router();
var courseController = require('../app/controllers/courseController')

router.use('/',courseController.index)


module.exports = router;