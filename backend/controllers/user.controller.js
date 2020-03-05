'use strict';

var db = require('../services/database.mysql');

var userCon = {};

userCon.getuser = (req, res, next) => {
    var query = `CALL get_user('${req.body.username}')`;

    db.query(query, true, (err, results, fields) => {
        if (err){
            res.json({message: 'Error retrieving record, check entered values' + err});
        } else {
            res.json(results[0]);
        }
    });
};

module.exports = userCon;