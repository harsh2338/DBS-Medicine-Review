'use strict';

var drug = require('../models/drug.model');
var seq = require('sequelize');

var Op = seq.Op;

exports.search = function(req, res, next) {
    var searchQuery = {
        where: {
            'name' : {
                [Op.regexp] : '^' + req.query.name + '+'
            }
        }
    };
    if( !req.query ){
        req.status(403)
            .json("No search query");
    } else {
        drug.findAll(searchQuery).then( deets => {
            if (!deets){
                //console.log(deets);
                //res.status(403).json("Not available");
                drug.findAll().then( deets => {
                    res.status(403)
                        .json({message : "Not available", 'available drugs' : deets.names});
                })
            } else {
                res.status(201)
                    .json({drug : deets});            
            }
        });
    }
};