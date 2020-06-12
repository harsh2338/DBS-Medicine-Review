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
            console.log(results[0])
            res.status(200).send(
                results[0].map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                    }
                })
            );
        }
    });
};

searchCon.get_drug = (req, res, next) => {
    var query = `CALL get_drug_details('${req.query.name}')`;
    db.query(query, true, (err, results, fields) => {
        if(err){
            res.status(404).json({message: 'Error '+ err});
        } else {
            console.log(results[0][0])
            var drug = {};

            if(results[0][0]) {
            drug = {
                id: results[0][0].id,
                name : results[0][0].name,
                description : results[0][0].description,
                dosage : results[0][0].dosage,
                rating : results[0][0].avg_rating,
            }

            console.log(drug);
            }
            res.status(200).send(
                drug
            )
        }
    });
};

searchCon.get_drug_comments = (req, res, next) => {
    var query = `CALL get_comments('${req.query.id}')`;
    var comments = [];
    db.query(query, true, (err, results, fields) => {
        if(err){
            res.status(404).json({message: "Error" + err});
        } else {
            results[0].forEach((element, index) => {
                comments[index] = element
            })

            res.status(200).send(comments)
        }
    })
}

searchCon.search_disease = (req, res, next) => {
    console.log('Search req for ', req.query.name);
    var query = `CALL search_disease('${req.query.name}')`;

    db.query(query, true, (err, results, fields) => {
        if(err){
            res.status(404).json({message: 'Error '+ err});
        } else {
            console.log(results[0])
            res.status(200).send(
                results[0].map(item => {
                    return {
                        id: item.diseaseid,
                        name: item.name,
                    }
                })
            );
        }
    });
}



module.exports = searchCon;