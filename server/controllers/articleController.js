/* eslint-disable new-cap */

const ArticleModel = require('../models/article');

const createNewArticle = async (req, res) => {
  try {
    res.render('articles/new', { article: new ArticleModel() });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAllArticles = async (req, res) => {
  try {
    const article = await ArticleModel.find({});
    res.render('articles/new', { article });
    // res.send(article)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const editArticle = async (req, res) => {
  try {
    const article = await ArticleModel.findById(req.params.id);
    res.render('articles/edit', { article });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteArticle = async (req, res) => {
  try {
    await ArticleModel.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createNewArticle,
  getAllArticles,
  editArticle,
  deleteArticle,
};
