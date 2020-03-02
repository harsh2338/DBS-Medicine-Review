var express = require('express');
var router = express.Router();
var authCon = require('../controllers/auth.controller');
var searchCon = require('../controllers/search.controller');
var drugCon = require('../controllers/drug.controller');

/* GET home page. */
//router.get('/', index.index);

router.post('/register', authCon.data);

router.post('/login', authCon.authenticate);

router.get('/search', searchCon.search);

router.post('/add-drug', drugCon.add);

module.exports = router;
