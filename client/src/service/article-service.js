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


// const getAllArticles = async (req,res) =>{
//     try{
//         const article = await articleModel.find({})
//         res.render('articles/new',{article:article})
//         // res.send(article)
//     } catch(error){
//         console.log(error);
//         res.status(500).json({message:"Server Error"});
//     }
// }

// const editArticle = async (req,res) =>{
//     try{
//         const article = await articleModel.findById(req.params.id)
//         res.render('articles/edit',{article:article})
//     } catch(error){
//         console.log(error);
//         res.status(500).json({message:"Server Error"});
//     }
// }

// const deleteArticle = async (req,res) => {
//     try{
//         await articleModel.findByIdAndDelete(req.params.id);
//         res.redirect('/')
//     } catch(error){
//         console.log(error);
//         res.status(500).json({message:"Server Error"});
//     }
// }

module.exports = {
    getAllArticles
}