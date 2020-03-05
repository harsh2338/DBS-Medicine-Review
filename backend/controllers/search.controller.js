'use strict';

var db = require('../services/database.mysql');

var searchCon = {};

searchCon.search = (req, res, next) => {
    console.log('Search req for ', req.query.name);
    var query = `CALL search('${req.query.name}')`;

    db.query(query, true, (err, results, fields) => {
        if(err){
            res.json({message: 'Error '+ err});
        } else {
            res.json(results[0]);
        }
    });
};

module.exports = searchCon;







//Unused

// var drug = require('../models/drug.model');
// var seq = require('sequelize');

// var Op = seq.Op;

// exports.search = function(req, res, next) {
//     var searchQuery = {
//         where: {
//             'name' : {
//                 [Op.regexp] : '^' + req.query.name + '+'
//             }
//         }
//     };
//     if( !req.query ){
//         req.status(403)
//             .json("No search query");
//     } else {
//         drug.findAll(searchQuery).then( deets => {
//             if (!deets){
//                 //console.log(deets);
//                 //res.status(403).json("Not available");
//                 drug.findAll().then( deets => {
//                     res.status(403)
//                         .json({message : "Not available", 'available drugs' : deets.names});
//                 })
//             } else {
//                 res.status(201)
//                     .json({drug : deets});            
//             }
//         });
//     }
// };