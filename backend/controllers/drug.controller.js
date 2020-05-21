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




















//Unused

// var drug = require('../models/drug.model');
// var db = require('../services/database.sqlize');

// exports.add = function(req, res, next) {
//     db.sync().then( function() {
//         var newDrug = {
//             name: req.body.name,
//             description: req.body.description,
//             did: req.body.did,
//             constituents: req.body.constituents,
//             side_fx: req.body.side_fx,
//             dosage: req.body.dosage,
//             authors: req.body.authors
//         }

//         return drug.create(newDrug).then(function() {
//             res.status(201)
//                 .json({ message: 'Details added!' });
//         });
//     }).catch(function(error) {
//         res.status(403)
//             .json({ message: 'Doesn\'t exist' });
//     });
// };

