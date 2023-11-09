const Article = require("../models/articleModel");

module.exports = {

  createArticle: (params) => {
    return Article.create(params)
  },

  updateArticle: (params) => {
    return Article.findOneAndUpdate({ _id: params.articleId, userId: params.userId }, params, { new: true }).lean()
  },

  viewArticle: (params) => {
    return Article.findOne({ _id: params.articleId, isDeleted: 0 })
  },

  deleteArticle: (params) => {
    return Article.findOneAndUpdate(
      { _id: params.articleId },
      { isDeleted: 1, updated: Date.now() },
      { new: true }
    );
  },

  getArticleById: (params) => {
    return Article.findOne({ _id: params.articleId, isDeleted: 0 })
  }
};
