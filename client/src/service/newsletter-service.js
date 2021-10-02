const API =
  process.env.NODE_ENV === "production"
    ? `https://empowering-women-web.herokuapp.com/`
    : "http://localhost:5000";

export const getAllNewsletter = async (req, res) => {
  try {
    return await fetch(`${API}/member/getMembers`);
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
      await fetch(`${API}/member/getMembers/id`, options);
    } catch (error) {
      console.log(error);
    }
  };

  export const addMemberToNewsletter = async (memberEmail) => {
    const options = {
      method: "POST",
      body: JSON.stringify({ Email: memberEmail }),
      headers: { "Content-Type": "application/json" },
    };
    try {
      return fetch(`${API}/mailChimp/createMember`, options);
    } catch (error) {
      console.log(error);
    }
  };


 

 export const getAllMembers = () => {
    const options = {
      method: "get",
      body: JSON.stringify(),
      headers: { "Content-Type": "application/json" },
    };
    try {
      return fetch(`${API}/mailChimp/getAllMembers`, options)
        .then((res) => {
          return res.json();
        })

    } catch (error) {
      console.log(error);
    }
  };

  

  
