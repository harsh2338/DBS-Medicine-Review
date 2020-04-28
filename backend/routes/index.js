var express = require('express');
var router = express.Router();
var authCon = require('../controllers/auth.controller');
var drugCon = require('../controllers/drug.controller.js');
var searchCon = require('../controllers/search.controller');
var middle = require('../middleware/middle');
var check_user = require('../middleware/check_user');
var userCon = require('../controllers/user.controller');

router.post('/register', authCon.register);

router.post('/register-pharma', authCon.register_pharma);

router.post('/login', authCon.authenticate);

router.get('/profile/me', middle.checkToken, userCon.get_user);

router.post('/profile/me/add-family', middle.checkToken, userCon.add_family)

router.get('/profile/me/family', middle.checkToken, userCon.get_userfam);

router.get('/search', searchCon.search);

router.get('/drug', searchCon.get_drug);

router.post('/add-drug', check_user.checkRole, drugCon.add_drug);

router.post('/drug', drugCon.add_comment);

module.exports = router;
