const _ = require("lodash");

const appUtils = require("../utils/appUtils");
const exceptions = require("../utils/customException");
const constant = require("../utils/constant");

let validateCreateArticle = (req, res, next) => {
  let { headline, description } = req.body;
  const errors = [];

  if (!headline) {
    errors.push({
      fieldName: "headline",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "headline"),
    });
  }
  
  if (!description) {
    errors.push({
      fieldName: "description",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "description"),
    });
  }
  if (errors && errors.length > 0) {
    validationError(errors, next);
  }
  next();
};

let validationError = (errors, next) => {
  if (errors && errors.length > 0) {
    return next(
      exceptions.getCustomErrorException(
        constant.MESSAGES.VALIDATION_ERROR,
        errors
      )
    );
  }
  next();
};

module.exports = {
  validateCreateArticle,
};
