const API = "http://localhost:5000";
// process.env.NODE_ENV === "production"
//  ? `https://empowering-women-web.herokuapp.com/`:

export const getTeamMemberInHebrew = async (req, res) => {
  try {
    return await fetch(`${API}/team/hebrew`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getTeamMemberInEnglish = async (req, res) => {
  try {
    return await fetch(`${API}/team/english`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
