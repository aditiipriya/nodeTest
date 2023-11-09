const express = require("express");
const router = express.Router();
const responseHandler = require('../response/responseHandler');

const userRoute = require("../v1/routes/userRoute");
const articleRoute= require("../v1/routes/articleRoute");

module.exports = function (app) {
  app.use('/api/v1', userRoute);
  app.use('/api/v1', articleRoute);

  app.use(responseHandler.handleError)
};