const API =
  process.env.NODE_ENV === "production"
    ? `https://empowering-women-web.herokuapp.com`
    : "http://localhost:5000";

export const addContactUsInformation = (inquiry, email, content) => {
  // const date = Date.now();
  const options = {
    method: "POST",
    body: JSON.stringify({
      inquiry,
      email,
      content,
      iscompleted: false,
      notes: "notes",
    }),
    headers: { "Content-Type": "application/json" },
  };
  try {
    return fetch(`${API}/contactUs/createContactUs`, options);
  } catch (error) {
    console.log(error);
  }
};
