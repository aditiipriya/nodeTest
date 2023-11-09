const mongoose = require("mongoose");
const ArticleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required:true },
  headline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type:Number,
    default: 0
  }
});
const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;