const API =
  process.env.NODE_ENV === "production"
    ? `https://empowering-women-web.herokuapp.com/`
    : "http://localhost:5000";

export const addContactUsInformation = (inquiry,email,content,date)=>{
    const options = {
        method: "POST",
        body: JSON.stringify({ inquiry,email,content,date }),
        headers: { "Content-Type": "application/json" },
      };
      try {
        return fetch(`${API}/contactUs/createContactUs`, options);
      } catch (error) {
        console.log(error);
      }
}