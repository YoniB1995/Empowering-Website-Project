import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { editPlan, getAllPlans } from '../../../../service/plan-service';
import './EditPlans.css';

const EditPlans = () => {
  const [plan, setPlan] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [markdown, setMarkdown] = useState();
  const { id } = useParams();
  useEffect(() => {
    getAllPlans()
      .then((res) => res.json())
      .then((result) => {
        let founded = result.find((article) => article._id === id);
        setPlan(founded);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setTitle(plan?.title);
    setDescription(plan?.description);
    setMarkdown(plan?.markdown);
  }, [plan]);

  useEffect(() => {
    setPlan((oldObj) => ({ ...oldObj, title, description, markdown }));
  }, [title, description, markdown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(plan);
    editPlan(plan)
      .then(() => {
        window.location.pathname = '/Plans';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        position: 'fixed',
        top: '0',
        left: '0',
        height: '100vh',
        width: '100vw',
        zIndex: '1111',
      }}
    >
      <h1>עריכת תכנית</h1>
      <div id='form-main'>
        <div id='form-div'>
          <form onSubmit={handleSubmit} class='form' id='form1'>
            <p class='title'>
              <label htmlFor='title'>title</label>
              <input
                name='title'
                type='text'
                class='validate[required,custom[onlyLetter],length[0,100]] feedback-input'
                id='title'
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(plan);
                }}
              />
            </p>

            <p class='email'>
              <label htmlFor='markdown'>markdown</label>
              <input
                name='email'
                type='text'
                class='validate[required,custom[email]] feedback-input'
                id='email'
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
              />
            </p>

            <p class='text'>
              <label htmlFor='description'>description</label>
              <textarea
                name='description'
                class='validate[required,length[6,300]] feedback-input'
                id='comment'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </p>

            <div class='submit'>
              <input type='submit' value='save changes' id='button-blue' />
              <div class='ease'></div>
            </div>
            <button>
              <Link to='/Plans'>cancel</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPlans;
