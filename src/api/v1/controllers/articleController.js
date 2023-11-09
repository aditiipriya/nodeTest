const articleService = require("../services/articleService");
const customException = require("../utils/customException");

module.exports = {

  createArticle: async (params) => {
    const data = await articleService.createArticle(params);
    let result = {
      message: "Article Created successfully !!",
      data: data
    };
    return result;
  },

  updateArticle: async (params) => {
    let articleExist = await articleService.getArticleById(params)

    if (articleExist && articleExist.userId != params.userId) {
      throw customException.unauthorizeAccess();
    }
    return articleService.updateArticle(params)
      .then((data) => {
        if (data)
          return { message: "Article updated !!", Article: data };
        else
          throw customException.ARTICLE_NOT_FOUND();
      });
  },

  viewArticle: async (params) => {
    return await articleService.viewArticle(params)
      .then((data) => {
        if (data)
          return { message: "Article fetched !!", Article: data };
        else
          throw customException.ARTICLE_NOT_FOUND();
      });
  },

  deleteArticle: async (params) => {
    let articleExist = await articleService.getArticleById(params)
    if (articleExist && articleExist.userId != params.userId) {
      throw customException.unauthorizeAccess();
    }
    return await articleService.deleteArticle(params)
      .then((data) => {
        if (data)
          return { message: "Article deleted !!" };
        else
          throw customException.ARTICLE_NOT_FOUND();
      });
  },


};
