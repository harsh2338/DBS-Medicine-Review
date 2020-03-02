'use strict';

var drug = require('../models/drug.model');

exports.search = function(req, res, next) {
    var searchQuery = {
        where: {'name' : req.query.name}
    };
    if( !req.query ){
        req.status(403)
            .json("No search query");
    } else {
        drug.findOne(searchQuery).then( deets => {
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