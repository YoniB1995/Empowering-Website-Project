/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable new-cap */
const articleModel = require('../models/articleModel');
const ErrorResponse = require('../utils/errorResponse');

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

const getAllArticles = async (req, res, next) => {
  const article = await articleModel.find({});
  if (!article) {
    return next(new ErrorResponse('Please provide article details to publish', 400));
  }
  try {
    res.render('articles/new', { article });
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse('Server Error', 500));
  }
};

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
    res.send({ success: true, message: 'article deleted' });
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
