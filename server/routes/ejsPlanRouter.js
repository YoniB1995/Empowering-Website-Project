/* eslint-disable new-cap */
/* eslint-disable no-use-before-define */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-expressions */
const express = require('express');

const ejsPlanRouter = express.Router();
const planController = require('../controllers/planController');
const {planModel} = require('../models/planModel')

// @ GET request to get all plans in english.
// @ URL http://localhost:5000/plans/all/english 
ejsPlanRouter.get('/',(req,res)=> {
    res.render('articles/index', { articles: articles})
})

// @ GET request to get all plans in english.
// @ URL http://localhost:5000/plans/all/english 
ejsPlanRouter.get('/new',(req,res)=> {
    res.render('articles/new', { article: new planModel()})
})

// @ GET request to get all plans in hebrew.
// @ URL http://localhost:5000/plans/all/hebrew 
ejsPlanRouter.get('/edit/:id', async (req,res)=> {
    const plan = await planModel.findById(req.params.id)
    res.render('articles/edit', {article: plan})});

// @ POST request to create a new plan.
// @ URL http://localhost:5000/plans/new 
ejsPlanRouter.get('/:slug',async (req,res)=> {
    const plan = await planModel.findOne({slug: req.params.slug});
    if( plan == null) res.redirect('/');
    res.render('articles/show', {article:plan})
});

// @ POST request to create a new plan.
// @ URL http://localhost:5000/plans/new 
ejsPlanRouter.post('/',async (req,res)=> {
    req.article = new planModel();
    next()
}, saveArticleAndRedirect('new'));

// @ PUT request to updated an existing plan.
// @ URL http://localhost:5000/plans/edit/:id 
ejsPlanRouter.put('/:id',async (req,res)=> {
    req.article = await planModel.findById(req.params.id);
    next()
});

// @ DELETE request to delete an existing plan.
// @ URL http://localhost:5000/plans/:id
ejsPlanRouter.delete('/:id',async (req,res)=> {
    await planModel.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

function saveArticleAndRedirect(path){
    return async (req,res)=> {
        let plan = req.article;
        article.title = req.body.title;
        article.description = req.body.description;
        article.markdown = req.body.markdown;

        try{
            plan = await plan.save();
            res.redirect(`/articles/${article.slug}`)
        } catch(e) {
            res.render(`/articles/${path}`, {article:plan})
        }
    }
}

module.exports = ejsPlanRouter;
