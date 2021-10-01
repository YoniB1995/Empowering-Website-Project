const API =
    process.env.NODE_ENV === "production"
        ? `https://yonib.herokuapp.com`
        : "http://localhost:5000";

export const cardUser = (user) => {
    const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
    };
    try {
        return fetch(`${API}/store/card`, options)
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