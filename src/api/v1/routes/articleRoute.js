const articleRouter = require("express").Router();
const articleController = require("../controllers/articleController");
const resHndlr=require('../../response/responseHandler');
const validators =require('../validators/validateArticle');
const middleware= require('../middleware');


articleRouter.route("/create").post([ middleware.authenticate.autntctTkn, validators.validateCreateArticle], (req, res) => {
  req.body.userId = req.user.userId;
  articleController.createArticle({ ...req.body })
  .then( (result)=> { resHndlr.sendSuccess(res, result, req); })
  .catch( (err)=> { resHndlr.sendError(res, err, req); });
});


articleRouter.route("/update").patch([middleware.authenticate.autntctTkn], (req, res) =>{
  req.body.userId = req.user.userId;
  articleController.updateArticle({ ...req.body })
    .then( (result) => {
      resHndlr.sendSuccess(res, result, req);
    })
    .catch( (err)=> {
      resHndlr.sendError(res, err, req);
    });
}); 

articleRouter.route("/viewArticle").get([],  (req, res) =>{
  articleController.viewArticle({ ...req.query })
    .then( (result)=> {
      resHndlr.sendSuccess(res, result, req);
    })
    .catch( (err)=> {
      resHndlr.sendError(res, err, req);
    });
});

articleRouter.route("/deleteArticle").delete([middleware.authenticate.autntctTkn], (req, res)=> {
  articleController.deleteArticle({...req.query}).then( (result) =>{
      resHndlr.sendSuccess(res, result, req);
    })
    .catch( (err) =>{
      resHndlr.sendError(res, err, req);
    });
});


module.exports = articleRouter;

