'use strict';

var db = require('../services/database.mysql');

var drugCon = {};

drugCon.add_drug = (req, res, next) => {

    var name = req.body.name;
    var desc = req.body.description;
    var dose = req.body.dosage;
    var diseaseList = req.body.diseaseid_list;
    var drugList = req.body.drugid_list;
    var author = req.body.userid;



    var query = `CALL add_drug('${name}', "${desc}", "${dose}", '${diseaseList}', '${drugList}', '${author}')`;

    console.log(query);
    db.query(query, true, (err, results) => {
        if(err){
            console.log(err);
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
    var query = `CALL add_comment(${req.body.did},${req.body.uid},'${req.body.comment_desc}')`;
    console.log(query);
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

drugCon.add_rating = (req, res, next) => {
    var query = `CALL add_rating('${req.body.rating}','${req.body.did}')`;
    console.log(query);
    db.query(query, true, (err, results) => {
        if(err){
            res.status(404).json({
                message: 'Error encountered ' + err
            });
        } else {
            res.status(200).json({
                message: 'Successfully added rating to drug'
            });
        }
    });
};

drugCon.get_drugauthor = (req, res, next) => {
    var query = `CALL get_drug_authors('${req.query.did}')`;
    console.log(query);
    db.query(query, true, (err, results) => {
        if(err) {
            res.status(404).json({
                message: 'Error encountered' + err
            });
        }  else {
            res.status(200).json({
                did: results[0][0].did,
                author: results[0][0].username,
            })
        }
    })
};

drugCon.get_similardrugs = (req, res, next) => {
    var query = `CALL get_similar_drugs('${req.query.did}')`;
    var similardrugs = [];
    console.log(query);
    db.query(query, true, (err, results) => {
        if(err) {
            res.status(404).json({
                message: 'Error encountered' + err
            });
        }  else {
            similardrugs = results[0].map((element) => {
                return element.similar_drug_names;
            })
            res.status(200).send(similardrugs);
        }
    })
}

drugCon.get_diseasescured = (req, res, next) => {
    var query = `CALL get_diseases_cured('${req.query.did}')`;
    var diseasescured = [];
    console.log(query);
    db.query(query, true, (err, results) => {
        if(err) {
            res.status(404).json({
                message: 'Error encountered' + err
            });
        }  else {
            diseasescured = results[0].map((element) => {
                return element.name;
            })
            res.status(200).send(diseasescured);
        }
    })

}
module.exports = drugCon;






















