import React from 'react';
import './card.css';

const Card = (props) => {
  const {title , icon, onClick} = props;
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap:'wrap',
          margin: '20px 0',
        }}
      >
        <a href='#' className='card education'>
          <div className='overlay'></div>
          <div className='circle'>
          <i className={icon}></i>
          </div>
          <h3>{title}</h3>
        </a>
      </div>
    </>
  );
};

export default Card;


