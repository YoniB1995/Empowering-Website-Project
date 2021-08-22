/* eslint-disable new-cap */
/* eslint-disable no-use-before-define */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-expressions */
const express = require('express');
const articleModel = require('../models/article');
const {} = require('../controllers/articleController');

const router = express.Router();

// articles/new
router.get('/new', (req, res) => {
  res.render('articles/new', { article: new articleModel() });
});

// articles/all
router.get('/all', async (req, res) => {
  const article = await articleModel.find({});
  // res.render('articles/new',{article:article})
  res.json(article);
});

//  articles/edit
router.get('/edit/:id', async (req, res) => {
  const article = await articleModel.findById(req.params.id);
  // res.render('articles/edit', { article });
  res.send(article);
});

// articles/:slug
router.get('/:slug', async (req, res) => {
  const article = await articleModel.findOne({ slug: req.params.slug });
  article === null && res.redirect('/');
  res.render('articles/show', { article });
});

// articles/
router.post('/', async (req, res, next) => {
  req.article = new articleModel();
  next();
}, saveArticleAndRedirect('new'));

// articles/test/
router.put('/test/:id', async (req, res, next) => {
  const oldArticle = await new articleModel({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  });
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
});

// articles/:id
router.put('/:id', async (req, res, next) => {
  req.article = await articleModel.findById(req.params.id);
  next();
}, saveArticleAndRedirect('new'));

// articles/:id
router.delete('/:id', async (req, res) => {
  await articleModel.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

function saveArticleAndRedirect(path) {
  return (async (req, res) => {
    let { article } = req;
    article.title = req.body.title;
    article.description = req.body.description;
    article.markdown = req.body.markdown;

    try {
      article = await article.save();
      // res.redirect(`/articles/${article.slug}`);
      res.send(article);
    } catch (error) {
      // res.render(`articles/${path}`, { article });
      res.send({ success: false, error: error.message });
    }
  });
}

module.exports = router;
