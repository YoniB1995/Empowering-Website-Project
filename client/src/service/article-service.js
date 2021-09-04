/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const API =
  process.env.NODE_ENV === "production"
    ? `https://empowering-women-web.herokuapp.com/`
    : "http://localhost:5000";

const getAllArticles = async (req, res) => {
  try {
    return await fetch(`${API}/articles/all`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const addArticle = async (articleData) => {
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

const editArticle = async (articleData) => {
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

const deleteArticle = async (articleData) => {
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

module.exports = {
  addArticle,
  getAllArticles,
  editArticle,
  deleteArticle,
};
