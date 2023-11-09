const userRouter = require("express").Router();
const validators = require("../validators/validateUser");
const userController = require("../controllers/userController");
const resHndlr = require("../../response/responseHandler");
const middleware = require("../middleware");

userRouter.route("/register").post([validators.validateRegister], (req, res) =>  {
  userController.userRegister({ ...req.body })
    .then( (result) =>{
      resHndlr.sendSuccess(res, result, req);
    })
    .catch( (err) =>{
      resHndlr.sendError(res, err, req);
    });
});

userRouter.route("/login").post([validators.validateLogin], (req, res) => {
  userController.userLogin({ ...req.body })
    .then( (result) =>{
      resHndlr.sendSuccess(res, result, req);
    })
    .catch( (err) =>{
      resHndlr.sendError(res, err, req);
    });
});

userRouter.route("/get-profile").get([middleware.authenticate.autntctTkn], (req, res) => {
  userController.getProfile({ userId:req.user.userId })
    .then( (result) =>{
      resHndlr.sendSuccess(res, result, req);
    })
    .catch( (err) =>{
      resHndlr.sendError(res, err, req);
    });
});



module.exports = userRouter;
