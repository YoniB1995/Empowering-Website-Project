/* eslint-disable new-cap */
/* eslint-disable no-use-before-define */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-expressions */
const express = require('express');
const articleModel = require('../models/articleModel');
const articleController = require('../controllers/articleController');

const router = express.Router();

// articles/all
router.get('/all', articleController.getAllArticles);

// articles/
router.post('/new', async (req, res, next) => {
  articleController.createNewArticle;
}, saveArticleAndRedirect('new'));

// articles/edit/
router.put('/edit/:id', async (req, res, next) => {

});

// articles/:id
router.delete('/:id', async (req, res) => {
  try {
    await articleModel.findByIdAndDelete(req.params.id);
    res.send({ success: true, message: 'article deleted' });
  } catch (error) {
    res.status(400).json({ success: false, message: 'ERROR' });
  }
});

function saveArticleAndRedirect(path) {
  return (async (req, res) => {
    let { article } = req;
    article.title = req.body.title;
    article.description = req.body.description;
    article.markdown = req.body.markdown;

    try {
      article = await article.save();
      res.send(article);
    } catch (error) {
      res.send({ success: false, error: error.message });
    }
  });
}

module.exports = router;
