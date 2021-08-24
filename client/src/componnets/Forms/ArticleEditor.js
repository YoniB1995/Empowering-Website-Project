/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import "../../componnets/features/Forms/Form.css";
import "../features/Input/Input.css";
import "../features/Button/Button.css";
import Button from "../features/Button/Button";
import { Link } from "react-router-dom";
// import {editArticle} from '../../service/admin-service'
import {
  getAllArticles,
  editArticle,
  deleteArticle,
  addArticle,
} from "../../service/article-service";
import "./ArticleEditor.css";

const API =
  process.env.NODE_ENV === "production"
    ? `https://yonib.herokuapp.com`
    : "http://localhost:5000";

export default function ArticleEditor(req, res) {
  const [articlesID, setArticlesID] = useState([]);
  const [article, setArticle] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles()
      .then((res) => res.json())
      .then((result) => setArticles(result));
  }, [articles]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
    console.log(article);
  };

  const updateArticle = (params) => {
    const ids = articles.map(
      (type, i) => type.title === article.title && setArticlesID(type._id)
    );
    params.preventDefault();
    const data = {
      id: articlesID,
      title: article.title,
      description: article.description,
      markdown: article.markdown,
    };
    editArticle(data);
  };

  const removeArticle = async (params) => {
    const ids = await articles.map(
      (type, i) => type.title === article.title && setArticlesID(type._id)
    );
    const data = {
      id: articlesID,
      title: article.title,
    };
    deleteArticle(data);
  };


  //const insertArticle = async (params) => {
    //const ids = await articles.map(
     // (type, i) => type.title === article.title && setArticlesID(type._id)
    //);

  const insertArticle = async  (params) => {
    // const ids = await articles.map((type,i) => type.title === article.title && setArticlesID(type._id) );

    const data = {
      title: article.title,
      description: article.description,
      markdown: article.markdown,
    };
    addArticle(data);
  };

  return (
    <>
      <form class="login-form">
        <div class="login-form__content">
          <div class="login-form__header">Edit your article</div>
          <h2>Type your title to edit </h2>
          <div style={{ textAlign: "right" }}>
            <h4>בשביל לעדכן יש לרשום את שם הכותרת של המאמר</h4>
            <h4>ADD בשביל להוסיף מאמר יש למלא את הפרטים וללחוץ </h4>
            <h4>בשביל למחוק יש לרשום את שם הכותרת של המאמר</h4>
          </div>
          <input
            className="login-form__input"
            type="text"
            placeholder="title"
            name="title"
            value={article.title}
            required
            onChange={handleInputChange}
          />
          <input
            className="login-form__input"
            type="text"
            name="description"
            placeholder="description"
            value={article.description}
            required
            onChange={handleInputChange}
          />
          <input
            className="login-form__input"
            type="text"
            name="markdown"
            placeholder="markdown"
            value={article.markdown}
            required
            onChange={handleInputChange}
          />
          <button
            className="form-button"
            type="button"
            text="EDIT"
            onClick={updateArticle}
          >
            EDIT Article
          </button>
          <br />
          <br />
          <button
            className="form-button"
            type="button"
            text="EDIT"
            onClick={removeArticle}
          >
            DELETE Article
          </button>
          <br />
          <br />
          <button
            className="form-button"
            type="button"
            text="EDIT"
            onClick={insertArticle}
          >
            ADD Article
          </button>

          <div class="login-form__links">
            <a class="login-form__link" href="./">
              <div>
                <Link to="/forgotpass">Forgot your password?</Link>
              </div>
              <div>
                <Link to="/articles">Go to Articles?</Link>
              </div>
            </a>
          </div>
        </div>
      </form>
    </>
  );
}
