const appUtils = require("../utils/appUtils");
const constant = require("../utils/constant");
const exceptions = require("../utils/customException");

let validateRegister = (req, res, next) => {
  let { email, name, password } = req.body;
  let errors = [];
  email = email.toLowerCase();
  if (!email) {
    errors.push({
      fieldName: "email",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}","email"),
    });
  }
  if (!name) {
    errors.push({
      fieldName: "name",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}","name"),
    });
  }
  if (!password) {
    errors.push({
      fieldName: "password",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}","password"),
    });
  }
  if (email) {
    if (!appUtils.isValidEmail(email)) {
      errors.push({fieldName: "email",message: constant.MESSAGES.INVALID_EMAIL,});
    }
  }
  if (errors && errors.length > 0) {
    validationError(errors, next);
  }
  next();
};

let validateLogin = (req, res, next) => {
  let { email, password } = req.body;
  email = email.toLowerCase();
  let errors = [];

  if (!email) {
    errors.push({
      fieldName: "email",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}","email"),
    });
  }

  if (email) {
    if (!appUtils.isValidEmail(email)) {
      errors.push({
        fieldName: "email",
        message: constant.MESSAGES.INVALID_EMAIL,
      });
    }
  }

  if (!password) {
    errors.push({
      fieldName: "password",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "password"),
    });
  }

  if (errors && errors.length > 0) {
    validationError(errors, next);
  }
  next();
};

let validationError = (errors, next) => {
  if (errors && errors.length > 0) {
    return next(exceptions.getCustomErrorException( constant.MESSAGES.VALIDATION_ERROR, errors ))
  }
  next();
};

module.exports = {
  validateRegister,
  validateLogin,
}