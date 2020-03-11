'use strict';

var jwt = require('jsonwebtoken'),
    db = require('../services/database.mysql'),
    config = require('../config/db.config');

// var authCon = {
//     comparePasswords: comparePasswords
// }
var authCon = {};

authCon.register = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var blood_grp = req.body.blood_grp;
    var name = req.body.name;
    var ph_number = req.body.ph_number;
    var dob = req.body.dob;
    var height = req.body.height;
    var weight = req.body.weight;
    var gender = req.body.gender;
    //var user_role = req.body.user_role;

    var query = `CALL register('${name}', '${email}' ,'${password}', '${username}', '${ph_number}', '${blood_grp}','${dob}', '${height}', '${weight}', '${gender}', 'user')`;

    console.log(query)
    db.query(query, true, (err, results, fields) => {
        if( err ){
            console.error(err);
            res.status(403).json({message: 'failure'+err});
        } else {
            res.json({message: 'success'});
            console.log(`Added user ${username} to database`);
        }
    });
};

authCon.register_pharma = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var blood_grp = req.body.blood_grp;
    var name = req.body.name;
    var ph_number = req.body.ph_number;
    var dob = req.body.dob;
    var height = req.body.height;
    var weight = req.body.weight;
    var gender = req.body.gender;
    //var user_role = req.body.user_role;

    var query = `CALL register('${name}', '${email}' ,'${password}', '${username}', '${ph_number}', '${blood_grp}','${dob}', '${height}', '${weight}', '${gender}', 'pharmacist')`;

    console.log(query)
    db.query(query, true, (err, results, fields) => {
        if( err ){
            console.error(err);
            res.status(403).json({message: 'failure'+err});
        } else {
            res.json({message: 'success'});
            console.log(`Added user ${username} to database`);
        }
    });
};

authCon.authenticate = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    //console.log(username, password);

    var search_user = `SELECT * from users WHERE username = '${username}'`;

    db.query(search_user, true, (err, results, fields) => {
        //console.log(results);
        if( err ){
            console.error(err);
            res.status(404).json({message: 'failure'+err});
        } else {
            if (results.length == 0){
                res.json({message: 'User not present. Check entered username'});
            } else {
                //console.log(results);
                var auth = authCon.comparePasswords(password, results[0].password);
                if(auth){
                    var token = jwt.sign(
                        {username: username, user_role: results[0].user_role},
                        config.keys.secret,
                        {expiresIn: '30m'}
                    );

                    res.status(200).json({ success: true, token: 'JWT ' + token });
                } else {
                    res.status(404).json({ message: 'Login failed!' });
                }
            }
        }    
    });
};






//Helper function to verify password
authCon.comparePasswords = (password, user_pass) => {
    if (password != user_pass){
        return 0;
    } else return 1;
};

















module.exports = authCon;

//Previous version using sequelize
//currently unused

// var db = require('../services/database'),
//     config = require('../config/db.config'),
//     User = require('../models/user.model'),
//     jwt = require('jsonwebtoken');

// var authCon = {}

// authCon.data = function(req, res, next) {
//     if (!req.body.username || !req.body.password){
//         res.json("Enter username and password");
//     } else {
//         db.sync().then(function() {
//             var newUser = {
//                 username: req.body.username,
//                 email: req.body.email,
//                 password: req.body.password
//             };

//             return User.create(newUser).then(function() {
//                 res.status(201).json({ message: 'Account created!' });
//             });
//         }).catch(function(error) {
//             res.status(403).json({ message: 'Username already exists!' + error});
//         });
//     }
// };

// authCon.authenticate = function(req, res, next) {
//     if(!req.body.username || !req.body.password) {
//         res.status(404).json({ message: 'Username and password are needed!' });
//     } else {
//         var username = req.body.username,
//             password = req.body.password,
//             potentialUser = { where: { username: username } };

//         User.findOne(potentialUser).then(function(user) {
//             if(!user) {
//                 res.status(404).json({ message: 'Authentication failed!' });
//             } else {
//                 user.comparePasswords(password, function(error, isMatch) {
//                     if(isMatch && !error) {
//                         var token = jwt.sign(
//                             { username: user.username },
//                             config.keys.secret,
//                             { expiresIn: '30m' }
//                         );

//                         res.json({ success: true, token: 'JWT ' + token });
//                     } else {
//                         res.status(404).json({ message: 'Login failed!' });
//                     }
//                 });
//             }
//         }).catch(function(error) {
//             res.status(500).json({ message: 'There was an error! ' + error});
//         });
//     }
// };

