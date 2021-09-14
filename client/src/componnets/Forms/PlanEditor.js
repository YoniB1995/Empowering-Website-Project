// /* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import '../../componnets/features/Forms/Form.css';
import '../features/Input/Input.css';
import '../features/Button/Button.css';
import Button from '../features/Button/Button';
import { Link } from 'react-router-dom';
// import {editArticle} from '../../service/admin-service'
import { getAllPlans, editPlan, deletePlan } from '../../service/plan-service';
import './PlanEditor.css';

const API =
  process.env.NODE_ENV === 'production'
    ? `https://empowering-women-web.herokuapp.com/`
    : 'http://localhost:5000';

export default function PlanEditor(req, res) {
  const [plansID, setPlanID] = useState([]);
  const [plan, setPlan] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    getAllPlans()
      .then((res) => res.json())
      .then((result) => setPlans(result));
  }, [plans]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlan({ ...plan, [name]: value });
    console.log(plan);
  };

  const updatePlan = (params) => {
    const ids = plans.map(
      (type, i) => type.title === plan.title && setPlanID(type._id)
    );
    params.preventDefault();
    const data = {
      id: plansID,
      title: plan.title,
      description: plan.description,
      markdown: plan.markdown,
    };
    editPlan(data);
  };

  const removePlan = async (params) => {
    const ids = await plans.map(
      (type, i) => type.title === plan.title && setPlanID(type._id)
    );
    const data = {
      id: plansID,
      title: plan.title,
    };
    deletePlan(data);
  };

  //const insertArticle = async (params) => {
  //const ids = await articles.map(
  // (type, i) => type.title === article.title && setArticlesID(type._id)
  //);

  const insertPlan = async (params) => {
    // const ids = await articles.map((type,i) => type.title === article.title && setArticlesID(type._id) );

    const data = {
      title: plan.title,
      description: plan.description,
      markdown: plan.markdown,
    };
    // addArticle(data);
  };

  return (
    <>
      <form class='login-form'>
        <div class='login-form__content'>
          <div class='login-form__header'>Edit your Plan</div>
          <h2>Type your title to edit </h2>
          <div style={{ textAlign: 'right' }}>
            <h4>בשביל לעדכן יש לרשום את שם הכותרת של המאמר</h4>
            <h4>ADD בשביל להוסיף מאמר יש למלא את הפרטים וללחוץ </h4>
            <h4>בשביל למחוק יש לרשום את שם הכותרת של המאמר</h4>
          </div>
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
          <button
            className='form-button'
            type='button'
            text='EDIT'
            onClick={updatePlan}
          >
            EDIT Plan
          </button>
          <br />
          <br />
          <button
            className='form-button'
            type='button'
            text='EDIT'
            onClick={removePlan}
          >
            DELETE Plan
          </button>
          <br />
          <br />
          <button
            className='form-button'
            type='button'
            text='EDIT'
            onClick={insertPlan}
          >
            ADD Plan
          </button>

          <div class='login-form__links'>
            <a class='login-form__link' href='./'>
              <div>
                <Link to='/forgotpass'>Forgot your password?</Link>
              </div>
              <div>
                <Link to='/Plans'>Go to plans?</Link>
              </div>
            </a>
          </div>
        </div>
      </form>
    </>
  );
}
