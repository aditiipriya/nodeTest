"use strict"

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const logger = require("../logger");
const appUtils = require("../api/v1/utils/appUtils")

// Connect to Db
function connectDb(env, callback) {
    let dbName = env.mongo.dbName;
    let dbUrl = env.mongo.dbUrl;
    let dbOptions = env.mongo.options;

    dbUrl = dbUrl + dbName;
    mongoose.set('debug', true);

    logger.info("Connecting to -> " + dbUrl);
    mongoose.connect(dbUrl, dbOptions);

    // When successfully connected
    mongoose.connection.on('connected', function () {
        logger.info('Connected to DB', dbName, 'at', dbUrl);
        callback();
    });

    // If the connection throws an error
    mongoose.connection.on('error', function (error) {
        logger.info('DB connection error: ' + error);
        callback(error);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        logger.info('DB connection disconnected.');
        callback("DB connection disconnected.");
    });
}

module.exports = connectDb;
