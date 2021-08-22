const API =process.env.NODE_ENV === 'production'? `https://yonib.herokuapp.com`:'http://localhost:5000';

// const getAllAdmins = async (req,res) =>{
//     try{
//         const admin = await fetch(`${API}/admin`)
//         .then((res) => { return res.json() })

//         res.json(admin);
//     } catch(error){
//         console.log(error);
//         res.status(500).json({message:"Server Error"});
//     }
// }

// const getAdminById = async (req,res) =>{
//     try{
//         const admin = await fetch(`${API}/admin/:id`);

//         res.json(admin);
//     } catch(error){
//         console.log(error);
//         res.status(500).json({message:"Server Error"});
//     }
// }

const registerAdmin = async (admin) => {
    const options = {
        method: "POST",
        body:JSON.stringify(admin),
        headers:{'Content-Type': 'application/json'}
    }
    try {
        return await fetch(`${API}/admin`,options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}

const deleteAdmin = async (req,res) => {
    const {username} = req.body;
    try{
        const user = await fetch(`${API}/movies/all`)

        if(!user) {
            console.log("there isnt a username like this name")
        }

        console.log(user)
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

module.exports = {
    registerAdmin,
    deleteAdmin
}