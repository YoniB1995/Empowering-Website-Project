const mongoose = require("mongoose");

const {
  CONNECTION_URL = "mongodb+srv://empowering2021:EMpower1234@cluster0.mwn5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
} = process.env;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongoose connect successed"))
  .catch((err) => console.log("err:", err));

const db = mongoose.connection;
module.exports = db;
