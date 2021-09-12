import React, { useEffect, useState } from 'react';
import './Plans.css';
import { Link } from 'react-router-dom';
import { deletePlan, getAllPlans } from '../../../service/plan-service';

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [reRender, setReRender] = useState(true);

  useEffect(() => {
    getAllPlans()
      .then((res) => res.json())
      .then((result) => setPlans(result));
  }, [reRender]);
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Plans </h2>
      <Link to='Admin/AddPlan'> add Plan</Link>
      <main id='content' class='main-area'>
        <ul class='cards1'>
          {plans.map((plan, i) => {
            return (
              <li class={`card1-item ${i % 4 === 0 && 'double'}`}>
                <figure class='card1'>
                  <img
                    src='https://source.unsplash.com/crVO0UMdoVU/600x600'
                    alt='Beach. Photo by Andreas Rønningen'
                  />
                  <figcaption class='caption'>
                    <h3 class='caption-title'>{plan.markdown}</h3>
                    <div class='location'>{plan.title}</div>
                    <p>{plan.description}</p>
                    <Link to={`/Plan/${plan._id}`}>read more</Link>
                  </figcaption>
                  <button>
                    <Link to={`/Admin/EditPlans/${plan._id}`}>edit</Link>
                  </button>
                  <button
                    onClick={() => {
                      deletePlan(plan);
                      setReRender((old) => !old);
                    }}
                  >
                    delete
                  </button>
                </figure>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Plans;
