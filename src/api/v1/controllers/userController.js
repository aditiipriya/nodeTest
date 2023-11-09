const sha256 = require("sha256");
const userService = require("../services/userService");
const customException = require("../utils/customException");
const jwt = require('../utils/jwt');

module.exports = {
  userRegister: async (params) => {
    let alreadyRegistered = await userService.isUserExist(params);
    if (alreadyRegistered) {
      throw customException.ALREADY_REGISTERED();
    }
    params.password = sha256(params.password);
    const data = (await userService.userRegister(params)).toObject();
    delete data.password;

    let result = {};
    result.message = "Registered successfully !!";
    result.data = data;
    return result;
  },

  userLogin: async (params) => {
    params.password = sha256(params.password);
    return await userService
      .isUserExist(params)
      .then((userExist) => {
        if (!userExist) {
          throw customException.EMAIL_NOT_REGISTERED();
        }
        return userService.userLogin(params);
      })
      .then(async (user) => {
        if (!user) {
          throw customException.INCORRECT_PASSWORD();
        }
        const token = jwt.createTokens({ userId: user._id, username: user.name, email: user.email });
        user.accessToken = token;

        let result = {};
        result.message = "Logined successfully !!";
        result.user = user;
        return result;
      });
  },

  getProfile: async (params) => {
    return await userService.getProfile(params)
      .then((user) => {
        return { Profile: user };
      });
  }

};
