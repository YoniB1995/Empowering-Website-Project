<<<<<<< HEAD
/* eslint-disable new-cap */
const ArticleModel = require('../models/article');
=======
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable new-cap */
const articleModel = require('../models/articleModel');
const ErrorResponse = require('../utils/errorResponse');
>>>>>>> 729ffe675b0a32eb8816822f43b17e16f7dbf71c

const createNewArticle = async (req, res, next) => {
  req.article = new articleModel();
  try {
    res.render('articles/new', { article: new articleModel() });
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse('Server Error', 500));
  }
  next();
};
<<<<<<< HEAD
const getAllArticles = async (req, res) => {
=======

const getAllArticles = async (req, res, next) => {
  const article = await articleModel.find({});
  if (!article) {
    return next(new ErrorResponse('Please provide article details to publish', 400));
  }
>>>>>>> 729ffe675b0a32eb8816822f43b17e16f7dbf71c
  try {
    res.render('articles/new', { article });
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse('Server Error', 500));
  }
};
<<<<<<< HEAD
const editArticle = async (req, res) => {
=======

const editArticle = async (req, res, next) => {
  const oldArticle = await new articleModel({
    _id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  });
  if (!oldArticle._id || !oldArticle.title || !oldArticle.description || !oldArticle.markdown) {
    return next(new ErrorResponse('Please provide article details to publish', 400));
  }
  articleModel.updateOne({ _id: req.params.id }, oldArticle).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!',
      });
    },
  ).catch(
    (error) => {
      res.status(400).json({
        error,
      });
    },
  );
>>>>>>> 729ffe675b0a32eb8816822f43b17e16f7dbf71c
  try {
    const article = await articleModel.findById(req.params.id);
    res.render('articles/edit', { article });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
const deleteArticle = async (req, res) => {
  try {
    await articleModel.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const articleController = {
  createNewArticle,
  getAllArticles,
  editArticle,
  deleteArticle,
};

module.exports = articleController;
