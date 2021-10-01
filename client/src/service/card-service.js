const API =
  process.env.NODE_ENV === "production"
    ? `https://empowering-women-web.herokuapp.com/`
    : "http://localhost:5000";

export const cardUser = (fullName, email) => {
  // const date = Date.now();
  const options = {
    method: "POST",
    body: JSON.stringify({
     fullName,
      email,
      iscompleted: false,
      notes: "notes",
    }),
    headers: { "Content-Type": "application/json" },
  };
  try {
    return fetch(`${API}/card/sendEmail`, options);
  } catch (error) {
    console.log(error);
  }
};
