/* eslint-disable new-cap */
/* eslint-disable no-use-before-define */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-expressions */
const express = require('express');
const articleModel = require('../models/articleModel');

const articleController = require('../controllers/articleController');

const router = express.Router();

router.get('/all', articleController.getAllArticles);
router.post('/new', articleController.createNewArticle, saveArticleAndRedirect('new'));
router.put('/edit/:id', articleController.editArticle);
router.delete('/:id', articleController.deleteArticle);

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
