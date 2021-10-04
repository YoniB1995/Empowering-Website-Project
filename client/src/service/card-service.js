const API =
    process.env.NODE_ENV === "production"
        ? `https://empowering-women-web.herokuapp.com/`
        : "http://localhost:5000";

export const cardUser = async (card) => {
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(card),
    };

    console.log(card)
    try {
        return await fetch(`${API}/card/sendEmail`, options).then((res) => {
            return res.json();
        })
            .then((data) => {
                return data
            });
    } catch (error) {
        console.log(error);
    }
};
