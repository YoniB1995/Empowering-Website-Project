/* eslint-disable no-unused-vars */
import "./Form.css";
<<<<<<< HEAD:client/src/componnets/Forms/ForgotPasswordForm.js
import Input from "../features/Input/Input";
import Button from "../features/Button/Button";
import {Link } from 'react-router-dom';
import React, {useState} from 'react'
import {getAllArticles} from '../../service/article-service'
<<<<<<< HEAD:client/src/componnets/features/Forms/ForgotPasswordForm.js

=======
import Input from "../Input/Input";
import Button from "../Button/Button";
>>>>>>> 463119fc6748ba7d488dd4401ba396e2c72e8433:client/src/componnets/features/Forms/ForgotPasswordForm.js
=======
import LoginForm from './LoginForm'
 
>>>>>>> yoni-branch:client/src/componnets/Forms/ForgotPasswordForm.js
const ForgotPasswordForm = () => {
  const [one,setOne] = useState('')
  const [articles,setArticles] = useState([])
  const displayArticles = () => {
  getAllArticles().then((res) => res.json() ).then(result => setArticles(result) )
  console.log(articles)
  }
  return (
    <>
    <form class="login-form" action="./" method="POST">
      <div class="login-form__content">
        <div class="login-form__header"><Link to="/">Login to your account</Link></div>
        <Input type="email" name="email" placeholder="Email" />
        <Button className="form-button" type="submit" text="Send" />
        <button onClick={displayArticles} type="button">Get All Articles</button>
        <div class="login-form__links">
        </div>
      </div>
    </form>
    {articles.map((article,key)=> <div key={key} style={{border:"1px solid black",margin:"5px"}}>{article.description} <br></br> {article._id} <Link to={`edit/${article._id}`} ><button>To Edit Article</button></Link>
      
      </div> )}
      
    </>
  );
};

export default ForgotPasswordForm;