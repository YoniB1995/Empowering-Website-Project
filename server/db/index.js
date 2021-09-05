require('dotenv').config()
const mongoose = require("mongoose");


const connectDB = async () => {
        await mongoose.connect(process.env.CONNECTION_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        });
}
connectDB().then(()=>{
    console.log('MongoDB Atlas Connected');
    // importData();

}).catch((err)=>{
    console.log(`Error Message - ${err.message}`)
})

module.exports = mongoose.connection;

