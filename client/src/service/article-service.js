/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const API =
  process.env.NODE_ENV === "production"
    ? `https://empowering-women-web.herokuapp.com/`
    : "http://localhost:5000";

export const getAllArticles = async (req, res) => {
  try {
    return await fetch(`${API}/articles/all`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const addArticle = async (articleData) => {
  const options = {
    method: "POST",
    body: JSON.stringify(articleData),
    headers: { "Content-Type": "application/json" },
  };
  try {
    await fetch(`${API}/articles/new`, options);
  } catch (error) {
    console.log(error);
  }
};

export const editArticle = async (articleData) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(articleData),
    headers: { "Content-Type": "application/json" },
  };
  try {
    await fetch(`${API}/articles/edit/${articleData["_id"]}`, options);
  } catch (error) {
    console.log(error);
  }
};

export const deleteArticle = async (articleData) => {
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  try {
    await fetch(`${API}/articles/${articleData._id}`, options);
  } catch (error) {
    console.log(error);
  }
};

