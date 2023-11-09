require("dotenv").config({ debug: process.env.DEBUG });
console.log("Server Start Date : ", new Date());
const express = require("express");
const cors = require("cors");

const config = require("./src/config");
const app = express();
const logger = require("./src/logger/index");

config.dbConfig(config.cfg, (error) => {
  if (error) {
    logger.error(error, "Exiting the app.");
  }

  app.use(cors());
  app.locals.rootDir = __dirname;
  config.expressConfig(app, config.cfg.environment);
  require("./src/api/v1/route")(app);

  app.listen(config.cfg.port, () => {
    logger.info(
      `Express server listening on ${config.cfg.port}, in ${config.cfg.TAG} mode`
    );
  });
});
