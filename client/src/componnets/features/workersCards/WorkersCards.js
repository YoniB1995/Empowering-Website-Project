import React from "react";
import './workersCards.css'
import {useState,useEffect} from 'react';
import {getAllWorkers} from '../../../service/team-service'

const WorkersCards = () => {

  const [team,setTeam] = useState([]);

  useEffect(()=>{
    getAllWorkers()
    .then((res)=> res.json())
    .then((res)=>{
      setTeam(res.team); 
    });
  },[]);

  console.log(team);

  
  return team.length > 0 && (
    <>
      <section
        style={{ maxWidth: "1400px", width: "90%" }}
        className="container"
      >
        <div className="page-header">
          <h1>
            הצוות שלנו
            <br />
            {/* <small>designed by yuda</small> */}
          </h1>
        </div>
        <div className="row active-with-click">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Red">
              <h2>
                <span>{team[0].fullname}</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  The Deer Hunter
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img className="img-responsive" src={team[0].image} />
                </div>
                <div className="mc-description">
                  {team[0].description}
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>{team[0].role}</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Pink">
              <h2>
                <span>{team[1].fullname}</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  Mystic River
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src={team[1].image}
                  />
                </div>
                <div className="mc-description">
                  {team[1].description}
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>{team[1].role}</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Deep-Purple">
              <h2>
                <span>{team[2].fullname}</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  Kramer vs. Kramer
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src={team[2].image}
                  />
                </div>
                <div className="mc-description">
                  {team[2].description}
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>{team[2].role}</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Purple">
              <h2>
                <span>{team[3].fullname}</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  Million Dollar Baby
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src={team[3].image}
                  />
                </div>
                <div className="mc-description">
                  {team[3].description}
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>{team[3].role}</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Indigo">
              <h2>
                <span>{team[4].fullname}</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  American History X
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src={team[4].image}
                  />
                </div>
                <div className="mc-description">
                  {team[4].description}
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>{team[4].role}</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div>
         
          {/* <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Light-Blue">
              <h2>
                <span>Harvey Keitel</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  Pulp Fiction
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src="https://images.pexels.com/photos/3727458/pexels-photo-3727458.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                </div>
                <div className="mc-description">
                  Some of his most notable starring roles were in Martin
                  Scorsese's Mean Streets and Taxi Driver, Ridley Scott's The
                  Duellists and Thelma & Louise, Quentin Tarantino ...
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>Social</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div> */}
          {/* <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Cyan">
              <h2>
                <span>Jack Nicholson</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  The Shining
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src="https://images.pexels.com/photos/1181725/pexels-photo-1181725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                </div>
                <div className="mc-description">
                  Throughout his career, Nicholson has portrayed unique and
                  challenging roles, many of which include dark portrayals of
                  excitable, neurotic and psychopathic characters ...
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>Social</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div> */}
          {/* <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Cyan">
              <h2>
                <span>Jack Nicholson</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  The Shining
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src="https://images.pexels.com/photos/1181725/pexels-photo-1181725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                </div>
                <div className="mc-description">
                  Throughout his career, Nicholson has portrayed unique and
                  challenging roles, many of which include dark portrayals of
                  excitable, neurotic and psychopathic characters ...
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>Social</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
              </div>
            </article>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default WorkersCards;
