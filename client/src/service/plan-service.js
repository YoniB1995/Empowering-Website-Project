/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const API =
  process.env.NODE_ENV === 'production'
    ? `https://empowering-women-web.herokuapp.com/`
    : 'http://localhost:5000';

export const getAllPlans = async (req, res) => {
  try {
    return await fetch(`${API}/plans/all/hebrew`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const addPlan = async (planData) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(planData),
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    await fetch(`${API}/plans/new`, options);
  } catch (error) {
    console.log(error);
  }
};

export const editPlan = async (planData) => {
  // const options = {
  //   method: "PUT",
  //   body: JSON.stringify(planData),
  //   headers: { "Content-Type": "application/json" },
  // };
  try {
    await fetch(`${API}/plans/edit/${planData['_id']}`, {
      method: 'PUT',
      body: JSON.stringify(planData),
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePlan = async (planData) => {
  const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    await fetch(`${API}/plans/${planData._id}`, options);
  } catch (error) {
    console.log(error);
  }
};
