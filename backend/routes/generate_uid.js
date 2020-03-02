var express = require('express');
var router = express.Router();
var uid = require('uid-safe');

router.post('/', function(req, res, next) {

  var cookie = uid.sync(18);

  res.cookie('cookie', cookie).
      send( {email: req.body.email, name: req.body.name, pass: req.body.password} );
});

module.exports = router;
