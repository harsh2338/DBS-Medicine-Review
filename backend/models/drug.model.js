// 'use strict';

// var Sequelize = require('sequelize'),
//     db = require('../services/database.sqlize'),
//     config = require('../config/db.config');

// var modelDefinition = {
//     name : {
//         type: Sequelize.STRING,
//         allowNull : false
//     },
//     description : {
//         type: Sequelize.STRING,
//         allowNull : false
//     },
//     did : {
//         type: Sequelize.INTEGER,
//         allowNull : false
//     },
//     constituents : {
//         type: Sequelize.STRING,
//         allowNull : false
//     },
//     side_fx : {
//         type: Sequelize.STRING,
//         allowNull : false
//     },
//     dosage : {
//         type: Sequelize.INTEGER,
//         allowNull : false
//     },
//     authors : {
//         type: Sequelize.STRING,
//         allowNull : false
//     }
// };

// db.authenticate()
//     .catch(err => {
//         console.log("Unsuccess", err);
//     });

// var drugModel = db.define('drug', modelDefinition);

// drugModel.sync().then( () => {
//     console.log("Tables synced");
// }).catch(err => {
//     console.log(err);
// });
// module.exports = drugModel;