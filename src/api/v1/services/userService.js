const User = require("../models/userModel");

module.exports = {
  userRegister: (params) => {
    let user = new User(params);
    const data = User.create(user);
    return data;
  },

  userLogin: (params) => {
    return User.findOne(
      {
        email: params.email,
        password: params.password,
        isDeleted: 0,
        status: 1
      },
      { password: 0 }
    ).lean();
  },

  isUserExist: (params) => {
    return User.findOne({ email: params.email, isDeleted: 0, status: 1 });
  },

  getProfile: (params) => {
    return User.find({ _id: params.userId }, { password: 0 });
  }

};
