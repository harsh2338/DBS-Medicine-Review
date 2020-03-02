'use strict'; 

var Sequelize = require('sequelize'),
    uid = require('uid-safe');

var config = require('../config/config'),
    db = require('../services/database'),
    bcrypt = require('bcrypt');

// 1: The model schema.
var modelDefinition = {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        //unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
};

// 2: The model options.
var modelOptions = {
    instanceMethods: {
        comparePasswords: function (password, callback) {
            bcrypt.compare(password, this.password, function(error, isMatch) {
                if(error) {
                    return callback(error);
                }
        
                return callback(null, isMatch);
            });
        }
        ,
        try_unite: try_unite
    },
    hooks: {
        beforeValidate: hashPassword
    }
};

db.authenticate()
    .catch(err => {
        console.log("Unsuccess", err);
    });

// 3: Define the User model.
var UserModel = db.define('user', modelDefinition, modelOptions);

// Compares two passwords.
function comparePasswords(password, callback) {
    bcrypt.compare(password, this.password, function(error, isMatch) {
        if(error) {
            return callback(error);
        }

        return callback(null, isMatch);
    });
}

// Hashes the password for a user object.
function hashPassword(user) {
    if(user.changed('password')) {
        return bcrypt.hash(user.password, 10).then(function(password) {
            user.password = password;
        });
    }
}

function try_unite(password) {
    if (this.password != password)
        return 0;
        else return 1;
}

module.exports = UserModel;