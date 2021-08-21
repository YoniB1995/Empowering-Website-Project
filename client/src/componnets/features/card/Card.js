import React from 'react';
import './card.css';

const Card = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: '20px 0',
        }}
      >
        <a href='#' className='card education'>
          <div className='overlay'></div>
          <div className='circle'>
            <i className='fas fa-hands-helping'></i>
          </div>
          <h3>מתנדבים</h3>
        </a>

        <a href='#' className='card education'>
          <div className='overlay'></div>
          <div className='circle'>
            <i className='fas fa-donate'></i>
          </div>
          <h3>תורמים</h3>
        </a>

        <a href='#' className='card education'>
          <div className='overlay'></div>
          <div className='circle'>
            <i className='fas fa-users'></i>
          </div>
          <h3>בוגרים</h3>
        </a>

        <a href='#' className='card education'>
          <div className='overlay'></div>
          <div className='circle'>
            <i className='fas fa-user-tie'></i>
          </div>
          <h3>מעסיקים</h3>
        </a>
      </div>
    </>
  );
};

export default Card;
