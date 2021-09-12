const API =
  process.env.NODE_ENV === "production"
    ? `https://empowering-women-web.herokuapp.com/`
    : "http://localhost:5000";

export const getAllNewsletter = async (req, res) => {
  try {
    return await fetch(`${API}/Newsletter/all`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const getOneNewsletter = async (articleData) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(articleData),
      headers: { 'Content-Type': 'application/json' },
    };
    try {
      await fetch(`${API}/Newsletter/id`, options);
    } catch (error) {
      console.log(error);
    }
  };

