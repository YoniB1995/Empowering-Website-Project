/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const API =
  process.env.NODE_ENV === "production"
    ? `https://empowering-women-web.herokuapp.com`
    : "http://localhost:5000";

const getAllProducts = async (req, res) => {
  try {
    return await fetch(`${API}/product`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const addProduct = async (articleData) => {
  try {
    await fetch(`${API}/product/createProduct`, {
      method: "POST",
      body: JSON.stringify(articleData),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
};

const editProduct = async (articleData) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(articleData),
    headers: { "Content-Type": "application/json" },
  };
  try {
    await fetch(`${API}/product/updateProduct/${articleData["_id"]}`, options);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (articleData) => {
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  try {
    await fetch(`${API}/product/deleteProduct/${articleData._id}`, options);
  } catch (error) {
    console.log(error);
  }
};

export { addProduct, getAllProducts, editProduct, deleteProduct };
