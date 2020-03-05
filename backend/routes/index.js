var express = require('express');
var router = express.Router();
var authCon = require('../controllers/auth.controller');
var searchCon = require('../controllers/search.controller');
var middle = require('../controllers/middle');
var userCon = require('../controllers/user.controller');

router.post('/register', authCon.register);

router.post('/login', authCon.authenticate);

router.get('/profile/me', middle.checkToken, userCon.getuser);

router.get('/search', searchCon.search);

module.exports = router;
