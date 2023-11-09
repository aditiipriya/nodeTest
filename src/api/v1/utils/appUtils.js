"use strict";

const getUserHome = () => {
  return process.env.HOME || process.env.HOMEPATH;
};

const getNodeEnv = () => {
  return process.env.NODE_ENV;
};

const isValidEmail = (email) => {
  const pattern = /(([a-zA-Z0-9\-?\.?]+)@(([a-zA-Z0-9\-_]+\.)+)([a-z]{2,3}))+$/;
  return new RegExp(pattern).test(email);
};

module.exports = {
  getUserHome,
  getNodeEnv,
  isValidEmail,
};
