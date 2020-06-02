'use strict';

var db = require('../services/database.mysql');

var drugCon = {};

drugCon.add_drug = (req, res, next) => {

    var name = req.body.drug_name;
    var desc = req.body.description;
    var related = req.body.related_drugs;
    var side = req.body.side_fx;
    var dose = req.body.dosage;
    var author = req.decoded.username;

    var query = `CALL add_drug('${name}', '${desc}', '${related}', '${side}', '${dose}', '${author}')`;

    console.log(query);
    db.query(query, true, (err, results) => {
        if(err){
            res.status(404).json({
                message: 'Error encountered ' + err
            });
        } else {
            res.status(200).json({
                message: 'Successfully added drug'
            });
        }
    });
};

drugCon.add_comment = (req, res, next) => {
    var query = `CALL add_comment('${req.body.uid}','${req.body.did}','${req.body.comment_desc}')`;

    db.query(query, true, (err, results) => {
        if(err){
            res.status(404).json({
                message: 'Error encountered ' + err
            });
        } else {
            res.status(200).json({
                message: 'Successfully added comment to entry'
            });
        }
    });

};

module.exports = drugCon;






















