'use strict';

var db = require('../services/database.mysql');

var userCon = {};

userCon.get_user = (req, res, next) => {
    var query = `CALL get_user('${req.body.username}')`;
    db.query(query, true, (err, results, fields) => {
        if (err){
            res.status(404).json({message: 'Error retrieving record, check entered values' + err});
        } else {
            res.status(200).json(results[0]);
        }
    });
};

userCon.get_userfam = (req, res, next) => {
    var query = `CALL get_user_fam('${req.body.username}')`;

    db.query(query, true, (err, results, fields) => {
        if(err){
            res.status(404).json({message: 'Error retrieving records ' + err});
        } else {
            res.status(200).json(results[0]);
        }
    });
};

userCon.add_family = (req, res, next) => {
    var query = `INSERT INTO family VALUES('${req.body.head_id}', '${req.body.member_id}', '${req.body.relationship}')`;

    db.query(query, true, (err, results, fields) => {
        if(err){
            res.status(404).json({
                message: 'Database error' + err
            });
        } else {
            res.status(200).json({
                message: 'Successfully added family member to database'
            })
        }
    });
};

module.exports = userCon;