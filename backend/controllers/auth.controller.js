'use strict';

var db = require('../services/database'),
    config = require('../config/config'),
    User = require('../models/user.model'),
    jwt = require('jsonwebtoken');

var authCon = {}

authCon.data = function(req, res, next) {
    if (!req.body.username || !req.body.password){
        res.json("Enter username and password");
    } else {
        db.sync().then(function() {
            var newUser = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            };

            return User.create(newUser).then(function() {
                res.status(201).json({ message: 'Account created!' });
            });
        }).catch(function(error) {
            res.status(403).json({ message: 'Username already exists!' + error});
        });
    }
};

authCon.authenticate = function(req, res, next) {
    if(!req.body.username || !req.body.password) {
        res.status(404).json({ message: 'Username and password are needed!' });
    } else {
        var username = req.body.username,
            password = req.body.password,
            potentialUser = { where: { username: username } };

        User.findOne(potentialUser).then(function(user) {
            if(!user) {
                res.status(404).json({ message: 'Authentication failed!' });
            } else {
                user.comparePasswords(password, function(error, isMatch) {
                    if(isMatch && !error) {
                        var token = jwt.sign(
                            { username: user.username },
                            config.keys.secret,
                            { expiresIn: '30m' }
                        );

                        res.json({ success: true, token: 'JWT ' + token });
                    } else {
                        res.status(404).json({ message: 'Login failed!' });
                    }
                });
            }
        }).catch(function(error) {
            res.status(500).json({ message: 'There was an error! ' + error});
        });
    }
};

module.exports = authCon;