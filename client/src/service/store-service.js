const API =
  process.env.NODE_ENV === "production"
    ? `https://empowering-women-web.herokuapp.com`
    : "http://localhost:5000";

export const getAllProducts = async (req, res) => {
  try {
    return await fetch(`${API}/product`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
