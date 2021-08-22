const API =process.env.NODE_ENV === 'production'? `https://yonib.herokuapp.com`:'http://localhost:5000';

const getAllArticles = async (req,res) =>{
    try{
        return await fetch(`${API}/login/all`)
        

        // res.json(admin);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}



const editArticle = async (articleID) =>{
  const options = {
    method: 'PUT',
    body: JSON.stringify({article:articleID}),
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    return await fetch(`${API}/articles/edit/${articleID}`, options)
    // saveArticleAndRedirect();
  } catch (error) {
    console.log(error);
  }
}

// const deleteArticle = async (req,res) => {
//     try{
//         await articleModel.findByIdAndDelete(req.params.id);
//         res.redirect('/')
//     } catch(error){
//         console.log(error);
//         res.status(500).json({message:"Server Error"});
//     }
// }

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

module.exports = {
    getAllArticles,
    editArticle
}