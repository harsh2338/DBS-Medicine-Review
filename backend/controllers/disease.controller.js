'use strict';

var db = require('../services/database.mysql');

var diseaseCon = {};

diseaseCon.add_disease = (req, res, next) => {

    var name = req.body.name;
    var desc = req.body.description;
    var drugList = req.body.cures;
    var pharmacistID = req.body.userid;

    var query = `CALL add_disease('${name}', "${desc}", '${drugList}', ${pharmacistID})`;

    console.log(query);
    db.query(query, true, (err, results) => {
        if(err){
            console.log(err);
            res.status(404).json({
                message: 'Error encountered ' + err
            });
        } else {
            res.status(200).json({
                message: 'Successfully added disease to database'
            });
        }
    });
};

module.exports = diseaseCon;






















