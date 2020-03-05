'use strict';

var drug = require('../models/drug.model');
var db = require('../services/database.sqlize');

exports.add = function(req, res, next) {
    db.sync().then( function() {
        var newDrug = {
            name: req.body.name,
            description: req.body.description,
            did: req.body.did,
            constituents: req.body.constituents,
            side_fx: req.body.side_fx,
            dosage: req.body.dosage,
            authors: req.body.authors
        }

        return drug.create(newDrug).then(function() {
            res.status(201)
                .json({ message: 'Details added!' });
        });
    }).catch(function(error) {
        res.status(403)
            .json({ message: 'Doesn\'t exist' });
    });
};

