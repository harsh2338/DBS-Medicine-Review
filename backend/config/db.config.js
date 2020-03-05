'use strict';

var config = module.exports;
var config2 = module.exports;

config.db = {
    user: 'root', 
    password: '',
    name: 'sampledb'
};

config.db.details = {
    host: 'localhost',
    port: 3306,      
    dialect: 'mysql'
};

config2.db = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sampledb'
}

config2.keys = {
    secret: 'This is a secret string lmao'
}