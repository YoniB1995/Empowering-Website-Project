require('dotenv').config()
const mongoose = require("mongoose");

const importData = require('../importData')


const connectDB = async () => {
        await mongoose.connect(MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:true
        });
}
connectDB().then(()=>{
    console.log('MongoDB Atlas Connected');
    // importData();

}).catch((err)=>{
    console.log(`Error Message - ${err.message}`)
})

module.exports = mongoose.connection;

