var express = require('express');
var router = express.Router();
var controller = require('../controller');

router.get('/api/v1/users',  controller.getUsers)

module.exports = router;