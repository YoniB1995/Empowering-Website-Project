/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable new-cap */
const express = require('express');
const articleModel = require('../models/article');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.get('/new', (req, res) => {
  res.render('articles/new', { article: new articleModel() });
});

router.get('/all', async (req, res) => {
  const article = await articleModel.find({});
  // res.render('articles/new',{article:article})
  res.json(article);
});

router.get('/edit/:id', async (req, res) => {
  const article = await articleModel.findById(req.params.id);
  res.render('articles/edit', { article });
});

router.get('/:slug', async (req, res) => {
  const article = await articleModel.findOne({ slug: req.params.slug });
  article === null && res.redirect('/');
  res.render('articles/show', { article });
});

router.post('/', async (req, res, next) => {
  req.article = new articleModel();
  next();
}, saveArticleAndRedirect('new'));

router.put('/:id', async (req, res, next) => {
  req.article = await articleModel.findById(req.params.id);
  next();
}, saveArticleAndRedirect('new'));

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
      res.redirect(`/articles/${article.slug}`);
    } catch (error) {
      res.render(`articles/${path}`, { article });
    }
  });
}

module.exports = router;
