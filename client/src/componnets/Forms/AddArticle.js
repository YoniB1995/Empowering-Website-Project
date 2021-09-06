// /* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import '../../componnets/features/Forms/Form.css';
import '../features/Input/Input.css';
import '../features/Button/Button.css';
import { Link } from 'react-router-dom';
// import {editArticle} from '../../service/admin-service'
import { getAllArticles, addArticle } from '../../service/article-service';
import './AddArticle.css';

const API =
  process.env.NODE_ENV === 'production'
    ? `https://empowering-women-web.herokuapp.com/`
    : 'http://localhost:5000';

export default function AddArticle(req, res) {
  const [articlesID, setArticlesID] = useState([]);
  const [article, setArticle] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles()
      .then((res) => res.json())
      .then((result) => setArticles(result));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
    console.log(article);
  };

  const insertArticle = async (params) => {
    // const ids = await articles.map((type,i) => type.title === article.title && setArticlesID(type._id) );

    const data = {
      title: article.title,
      description: article.description,
      markdown: article.markdown,
      slug: 'yonib-testing-new-crud-functions',
      sanitizedHtml: '<p>##This is maybe the final post</p>\n',
    };

    addArticle(data).then(() => {
      window.location.pathname = '/Articles';
    });
    // addArticle(data);
  };

  return (
    <>
      <form class='login-form'>
        <div class='login-form__content'>
          <h2>add article </h2>
          <input
            className='login-form__input'
            type='text'
            placeholder='title'
            name='title'
            value={article.title}
            required
            onChange={handleInputChange}
          />
          <input
            className='login-form__input'
            type='text'
            name='description'
            placeholder='description'
            value={article.description}
            required
            onChange={handleInputChange}
          />
          <input
            className='login-form__input'
            type='text'
            name='markdown'
            placeholder='markdown'
            value={article.markdown}
            required
            onChange={handleInputChange}
          />
          <br />
          <br />
          <button
            className='form-button'
            type='button'
            text='EDIT'
            onClick={insertArticle}
          >
            ADD Article
          </button>

          <div class='login-form__links'>
            <a class='login-form__link' href='./'>
              <div>
                <Link to='/Articles'>Go to Articles?</Link>
              </div>
            </a>
          </div>
        </div>
      </form>
    </>
  );
}
