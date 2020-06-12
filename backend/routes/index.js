var express = require('express');
var router = express.Router();
var authCon = require('../controllers/auth.controller');
var drugCon = require('../controllers/drug.controller.js');
var diseaseCon = require('../controllers/disease.controller.js');
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

router.get('/search-disease', searchCon.search_disease);

router.get('/drug', searchCon.get_drug);

router.get('/drug/comments', searchCon.get_drug_comments)

router.post('/add-drug', check_user.checkRole, drugCon.add_drug);

router.post('/drug/add-comment', drugCon.add_comment);

router.post('/drug/add-rating', drugCon.add_rating);

router.post('/add-medication', userCon.add_medication);

router.get('/get-medication', userCon.get_medication);

router.post('/disease/add-disease', diseaseCon.add_disease);

router.get('/drug/get-author', drugCon.get_drugauthor);

router.get('/drug/get-similardrugs', drugCon.get_similardrugs);

router.get('/drug/get-diseasescured', drugCon.get_diseasescured);

module.exports = router;