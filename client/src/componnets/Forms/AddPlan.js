// /* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import '../../componnets/features/Forms/Form.css';
import '../features/Input/Input.css';
import '../features/Button/Button.css';
import { Link } from 'react-router-dom';
// import {editArticle} from '../../service/admin-service'
import { getAllPlans, addPlan } from '../../service/plan-service';

const API =
  process.env.NODE_ENV === 'production'
    ? `https://empowering-women-web.herokuapp.com/`
    : 'http://localhost:5000';

export default function AddPlan(req, res) {
  const [plansID, setPlansID] = useState([]);
  const [plan, setPlan] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    getAllPlans()
      .then((res) => res.json())
      .then((result) => setPlans(result));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlan({ ...plan, [name]: value });
    console.log(plan);
  };

  const insertArticle = async (params) => {
    // const ids = await articles.map((type,i) => type.title === article.title && setArticlesID(type._id) );

    const data = {
      title: plan.title,
      description: plan.description,
      markdown: plan.markdown,
      slug: 'yonib-testing-new-crud-functions',
      sanitizedHtml: '<p>##This is maybe the final post</p>\n',
    };

    addPlan(data).then(() => {
      window.location.pathname = '/Plans';
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
            value={plan.title}
            required
            onChange={handleInputChange}
          />
          <input
            className='login-form__input'
            type='text'
            name='description'
            placeholder='description'
            value={plan.description}
            required
            onChange={handleInputChange}
          />
          <input
            className='login-form__input'
            type='text'
            name='markdown'
            placeholder='markdown'
            value={plan.markdown}
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
                <Link to='/Plans'>Go to Articles?</Link>
              </div>
            </a>
          </div>
        </div>
      </form>
    </>
  );
}
