import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAllPlans } from '../../../service/plan-service';
import './Plan.css';

const Plan = () => {
  const [plan, setPlan] = useState();
  const { id } = useParams();
  useEffect(() => {
    getAllPlans()
      .then((res) => res.json())
      .then((result) => {
        let founded = result.find((plan) => plan._id === id);
        setPlan(founded);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section id='article'>
        <div class='container'>
          <div class='page-container'>
            <article class='article'>
              <h1 class='l-heading'>title: {plan?.title}</h1>
              <div class='meta'>
                <small>
                  <i class='fas fa-user'></i>sanitizedHtml:
                  {plan?.sanitizedHtml}
                </small>
                <div class='category category-ent'>slug: {plan?.slug}</div>
              </div>
              <p>description: {plan?.description}</p>
              <p>markdown: {plan?.markdown}</p>
              <h3>{plan?.createdAt}</h3>
              <Link to='/Plans'>back to plans</Link>
            </article>

            <aside id='categories' class='article'>
              <h2>Categories</h2>
              <ul class='list'>
                <li>
                  <a href='#'>
                    <i class='fas fa-chevron-right'></i> Sports
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i class='fas fa-chevron-right'></i> Entertainment
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i class='fas fa-chevron-right'></i> Technology
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i class='fas fa-chevron-right'></i> Fashion
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i class='fas fa-chevron-right'></i> Shopping
                  </a>
                </li>
              </ul>
            </aside>

            <aside class='article bg-secondary'>
              <h2>Join Our Club</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
                id?
              </p>
              <a href='#' class='btn btn-dark btn-block'>
                Join Now
              </a>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plan;
