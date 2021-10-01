import 'animate.css';
import { Button, Card } from 'antd';
import { useEffect, useState } from 'react';
import WOW from 'wowjs';
import { ReadOutlined } from '@ant-design/icons';

import './programs.css';
const Programs = () => {
  const { Meta } = Card;
  const [clickedIndex, setClickedIndex] = useState(false);
  const [programs, setPrograms] = useState([]);
  const cardProgramOn = 'color:"white",marginLeft:"5px"';

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();

    fetch('http://localhost:5000/plans/all/hebrew')
      .then((res) => res.json())
      .then((data) => setPrograms(data));
  }, []);

  const ImgDisappearedOnHover = (index) => () => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  return (
    <div className='programs-wrapper'>
      <div className='programs-header'>
        <h3 style={{ color: '#D57E7E', fontSize: '32px' }}>תוכניות</h3>
        <div className='programs-header-decertion'></div>
      </div>
      <div className='cards-wrapper'>
        {programs.map((program, index) => (
          <Card
            className='program-card'
            onClick={ImgDisappearedOnHover(index)}
            hoverable
            cover={
              clickedIndex[index] ? (
                <div className='program-card animate__animated animate__fadeInUp'>
                  <div className='card-program-clicked-container'>
                    <h2 className='program-clicked-header'>{program.title} </h2>
                    <p className='program-clicked-description'>
                      {program.description}
                    </p>
                    <div>
                      <img
                        className='img-program-card'
                        src='./logo-main1.jpeg'
                        alt='program card img'
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  className='program-card animate__animated animate__fadeIn'
                  alt='example'
                  src='./woman-vector.jpg'
                />
              )
            }
          >
            <Meta
              title={
                clickedIndex[index] ? (
                  ''
                ) : (
                  <h3 className='program-card-title'>
                    {program.title}
                    <ReadOutlined style={{ marginLeft: '4px' }} />
                  </h3>
                )
              }
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Programs;
