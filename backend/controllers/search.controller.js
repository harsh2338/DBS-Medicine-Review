'use strict';

var db = require('../services/database.mysql');

var searchCon = {};

searchCon.search = (req, res, next) => {
    console.log('Search req for ', req.query.name);
    var query = `CALL search('${req.query.name}')`;

    db.query(query, true, (err, results, fields) => {
        if(err){
            res.status(404).json({message: 'Error '+ err});
        } else {
            res.status(200).send(
                results[0].map(item => {
                    return item.name
                })
            );
        }
    });
};

searchCon.get_drug = (req, res, next) => {
    var query = `CALL get_drug('${req.query.name}')`;
    //var query = `select drugs.*, comments.comment_desc, users.username from comments inner join drugs on drugs.id = comments.did inner join users on users.id = comments.uid where drugs.name = '${req.query.name}';`
    //console.log(query)
    db.query(query, true, (err, results, fields) => {
        if(err){
            res.status(404).json({message: 'Error '+ err});
        } else {

            var drug = {};
            var comment_entry = [];
            results[0].forEach((element, ind) => {
                //console.log("ELEMENT ", element, "INDEX", ind)
                comment_entry[ind] = {
                    name : element.username,
                    comment : element.comment_desc
                }
            });

            drug = {
                name : results[0][0].name,
                description : results[0][0].description,
                dosage : results[0][0].dosage,
                ratings : results[0][0].ratings,
                comments : comment_entry
            }

            //console.log(results);

            res.status(200).send(
                drug
            )
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