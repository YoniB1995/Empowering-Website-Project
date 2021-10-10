/* eslint-disable no-unused-vars */
const API =
  process.env.NODE_ENV === "production"
    ? `https://empowering-women-web.herokuapp.com`
    : "http://localhost:5000";

export const getAllAdmins = async (req, res) => {
  try {
    return await fetch(`${API}/admin`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAdminById = async (req, res) => {
  try {
    const admin = await fetch(`${API}/admin/:id`);

    res.json(admin);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const loginAdmin = (user) => {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  };
  try {
    return fetch(`${API}/admin/login`, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
};

export const registerAdmin = async (admin) => {
  const options = {
    method: "POST",
    body: JSON.stringify(admin),
    headers: { "Content-Type": "application/json" },
  };
  try {
    return await fetch(`${API}/admin`, options).then((res) => {
      return res.json();
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAdmin = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await fetch(`${API}/movies/all`);

    if (!user) {
      console.log("there isn't a username like this name");
    }

    console.log(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
