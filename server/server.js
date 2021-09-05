/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
require("dotenv").config();
const fileUpload = require("express-fileupload");
const express = require("express");

const cors = require("cors");

const PORT = process.env.PORT || 5000;
const articleModel = require("./models/articleModel");

const app = express();

const db = require("./db");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use(express.json()); // JSON יכולת לקרוא ולהציג מידע מ
app.use(express.urlencoded({ extended: false })); // params יכולת לשלוף מידע מ
app.use(methodOverride("_method"));
app.use(cors());
app.use(fileUpload());

const adminRouter = require("./routes/adminRoutes");
const articlesRouter = require("./routes/articleRouter");
const newsLetterRouter = require("./routes/newsLetterRouter");
const productRouter = require("./routes/productRouter");
const contactUsRouter = require("./routes/contactUsRouter");

app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  file.mv(`${__dirname}/../client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.use("/form", newsLetterRouter);
app.use("/articles", articlesRouter);
app.use("/admin", adminRouter);
app.use("/product", productRouter);
app.use("/contactUs", contactUsRouter);

app.get("/", async (req, res) => {
  const articles = await articleModel.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
