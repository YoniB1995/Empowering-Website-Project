const API =
  process.env.NODE_ENV === "production"
    ? `https://yonib.herokuapp.com`
    : "http://localhost:5000";

export const getAllWorkers = async (req, res) => {
  try {
    return await fetch(`${API}/team`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
